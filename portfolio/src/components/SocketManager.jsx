import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAtom, atom } from 'jotai';

// Connexion au serveur WebSocket
export const socket = io('https://d-yrgs.onrender.com');

// État global des personnages (drones)
export const charactersAtom = atom([]);

export const SocketManager = () => {
  const [, setCharacters] = useAtom(charactersAtom);

  useEffect(() => {
    // Fonction appelée lors de la connexion au serveur
    function onConnect() {
     /*  console.log('Connected to server'); */
    }

    // Fonction appelée lors de la déconnexion du serveur
    function onDisconnect() {
      /* console.log('Disconnected from server'); */
    }

    // Fonction appelée lorsque le serveur envoie un message "hello"
    function onHello() {
      /* console.log('Hello from server'); */
    }

    // Fonction appelée lorsque le serveur envoie la liste des personnages (drones)
    function onCharacters(cvalue) {
      /* console.log('Received characters:', cvalue); */
      setCharacters(cvalue); // Met à jour l'état global des personnages
    }

    // Abonnement aux événements du serveur
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('hello', onHello);
    socket.on('characters', onCharacters);

    // Nettoyage des écouteurs lors du démontage du composant
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('hello', onHello);
      socket.off('characters', onCharacters);
    };
  }, [setCharacters]); // Déclenche l'effet lorsque setCharacters change

  return null; // Ce composant ne rend rien (il gère uniquement la logique WebSocket)
};