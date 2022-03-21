import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const URL = 'localhost:50051';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GatewayModule,
    {
      transport: Transport.GRPC,
      options: {
        url: URL,
        package: 'gateway',
        protoPath: path.resolve(__dirname, '../../../proto/api.proto'),
        loader: {
          includeDirs: [path.resolve(__dirname, '../../..')],
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
