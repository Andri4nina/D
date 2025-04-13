import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour les requêtes HTTP
  app.enableCors({
    origin: 'https://portfolio-nine-mu-34.vercel.app', // ton frontend vercel
    methods: ['GET', 'POST'],
  });

  const port = process.env.PORT || 3000; // Utilisez le port défini dans les variables d'environnement, ou 3000 par défaut
  await app.listen(port);

}
bootstrap();