import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface Character {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  isMoving: boolean;
}

@WebSocketGateway(4000, { cors: { origin: 'http://localhost:5173' } })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private characters: Character[] = [];

  handleConnection(client: Socket) {
    this.characters.push({
      id: client.id,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      color: this.generateRandomColor(),
      isMoving: false,
    });
    this.broadcastCharacters();
  }

  handleDisconnect(client: Socket) {
    this.characters = this.characters.filter(c => c.id !== client.id);
    this.broadcastCharacters();
  }

  @SubscribeMessage('updateCharacter')
  handleUpdateCharacter(client: Socket, data: Partial<Character>) {
    const character = this.characters.find(c => c.id === client.id);
    if (character) Object.assign(character, data);
    this.broadcastCharacters();
  }

  private broadcastCharacters() {
    this.server.emit('characters', this.characters);
  }

  private generateRandomColor(): string {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
  }
}