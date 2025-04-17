import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface marouane {
  id: number;
  name: string;
  lastName: string;
  age: number;
}
const Op: marouane = {
  id: 10,
  name: 'marouane',
  lastName: 'elMoujahid',
  age: 21,
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getName();
  }
  @Get('/name')
  getName(): string {
    return this.appService.getHello();
  }

  @Get('/name3')
  getName2() {
    return 'helloooooooo';
  }

  @Get('/hhh')
  getHHHH(): marouane {
    return Op;
  }
}
