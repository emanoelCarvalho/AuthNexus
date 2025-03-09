import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/env/EnvService';
import { SwaggerModuleConfig } from './config/swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);
  const PORT = configService.getPort;

  SwaggerModuleConfig.setup(app);
  await app.listen(PORT);
}
bootstrap();
