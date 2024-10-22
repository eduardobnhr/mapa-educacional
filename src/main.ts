/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerModuleSetup } from './swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* app.enableCors();
  await app.listen(process.env.PORT ?? 3000); */

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true, 
  }));

  SwaggerModuleSetup.setup(app);
  
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  
  Logger.log(`🚀 aplicaçao rodando na porta: ${PORT}`, 'Bootstrap');
}
bootstrap();
