import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('company-finance')
  getCompanyBalance(): {
    balance: number[];
    expenses: number[];
    incomes: number[];
  } {
    return this.appService.getCompanyBalance();
  }

  @Get('employees')
  getNumbersOfEmployees(): number[] {
    return this.appService.getNumbersOfEmployees();
  }

  @Get('salary')
  getSalary(): number[] {
    return this.appService.getSalary();
  }

  @Get('labels')
  getLabels(): string[] {
    return this.appService.getLabels();
  }

  @Get('q-labels')
  getQuarter(): string[] {
    return this.appService.getQuarter();
  }

  @Get('department')
  getDepartment(): string[] {
    return this.appService.getDepartment();
  }
}
