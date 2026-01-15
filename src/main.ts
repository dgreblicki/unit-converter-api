import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // automatically converts strings → numbers, booleans, etc.
      whitelist: true, // strips unknown properties
      forbidNonWhitelisted: true, // rejects unknown properties
    }),
  );

  await app.listen(3000);
}
bootstrap();
