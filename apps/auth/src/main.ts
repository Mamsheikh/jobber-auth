/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AUTH_PACKAGE_NAME } from '@jobber/grpc';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { init } from '@jobber/nestjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await init(app);
  app.connectMicroservice<GrpcOptions>({
    transport: Transport.GRPC,
    options: {
      package: AUTH_PACKAGE_NAME,
      protoPath: join(__dirname, 'proto/auth.proto'),
    },
  });
  await app.startAllMicroservices();
}

bootstrap();
