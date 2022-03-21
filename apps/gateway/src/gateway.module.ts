import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SUMMATOR_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'summator',
          protoPath: resolve(__dirname, '../../../proto/summator.proto'),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
