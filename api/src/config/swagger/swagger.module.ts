import { INestApplication, Module } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({})
export class SwaggerModuleConfig {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('API auth')
      .setDescription('Documentação da API de autenticação')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
