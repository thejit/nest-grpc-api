import { Test, TestingModule } from '@nestjs/testing';
import { SummatorController } from './summator.controller';
import { SummatorService } from './summator.service';

describe('SummatorController', () => {
  let summatorController: SummatorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SummatorController],
      providers: [SummatorService],
    }).compile();

    summatorController = app.get<SummatorController>(SummatorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(summatorController.getHello()).toBe('Hello World!');
    });
  });
});
