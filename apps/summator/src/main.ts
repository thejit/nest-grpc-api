import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { SummatorModule } from './summator.module';

async function bootstrap() {
  const URL = 'localhost:50052';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SummatorModule,
    {
      transport: Transport.GRPC,
      options: {
        url: URL,
        package: 'summator',
        protoPath: path.resolve(__dirname, '../../../proto/summator.proto'),
      },
    },
  );

  await app.listen();
  // const app = await NestFactory.create(SummatorModule);
  // await app.listen(3000);
}
bootstrap();
