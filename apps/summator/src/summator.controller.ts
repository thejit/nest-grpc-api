import { Controller, Get } from '@nestjs/common';
import { SummatorService } from './summator.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class SummatorController {
  constructor(private readonly summatorService: SummatorService) {}

  @Get()
  getHello(): string {
    return this.summatorService.getHello();
  }

  @GrpcMethod('SummatorService', 'Sum')
  sum(body: { numbers: number[] }): { result: number } {
    return { result: body.numbers.reduce((a, v) => a + v, 0) };
  }
}
