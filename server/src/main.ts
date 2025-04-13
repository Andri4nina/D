import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour les requêtes HTTP
  app.enableCors({
    origin: 'http://localhost:5173', // Remplacez par l'URL de votre frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 3000; // Utilisez le port défini dans les variables d'environnement, ou 3000 par défaut
  await app.listen(port);

}
bootstrap();