import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from '../config/config.service';
import { EntityNotFoundExceptionFilter } from './shared/entity-not-found-exception.filter';
import { OpenAPIObject, PathsObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder().setTitle('Posts API').addServer(configService.getServerPath()).build()
    );
    const fs = require('fs');
    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    SwaggerModule.setup('docs', app, document);
  }
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  );
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  await app.listen(configService.getPort());
}
bootstrap();
