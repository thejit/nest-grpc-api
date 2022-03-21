import { Injectable } from '@nestjs/common';

@Injectable()
export class SummatorService {
  getHello(): string {
    return 'Hello World!';
  }
}
