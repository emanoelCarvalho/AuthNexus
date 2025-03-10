import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './config/env/EnvService';
import { SwaggerModuleConfig } from './config/swagger/swagger.module';
import { AppLogger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(EnvService);
  const PORT = configService.getPort;

  SwaggerModuleConfig.setup(app);
  app.useLogger(new AppLogger());
  await app.listen(PORT);
}
bootstrap();
