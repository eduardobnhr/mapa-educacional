/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* app.enableCors();
  await app.listen(process.env.PORT ?? 3000); */
  
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  
  Logger.log(`🚀 aplicaçao rodando na porta: ${PORT}`, 'Bootstrap');
}
bootstrap();
