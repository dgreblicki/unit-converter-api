import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,          // convert query strings to numbers automatically
      whitelist: true,          // remove unknown properties
      forbidNonWhitelisted: false
    }),
  );

  await app.listen(3000, '0.0.0.0'); // listen on all interfaces
  console.log('API running on http://localhost:3000');
}
bootstrap();
