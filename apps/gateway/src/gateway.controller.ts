import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { SummatorServiceClient } from './summator.interface';
import { GatewayService } from './gateway.service';

interface AddRequest {
  a: number;
  b: number;
}

@Controller()
export class GatewayController implements OnModuleInit {
  private summatorService: SummatorServiceClient;

  constructor(@Inject('SUMMATOR_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.summatorService =
      this.client.getService<SummatorServiceClient>('SummatorService');
  }

  @GrpcMethod('GatewayService', 'Add')
  add(body: AddRequest) {
    return this.summatorService.sum({ numbers: [body.a, body.b] }).toPromise();
  }
}
