import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('company-income')
  getCompanyIncome(): number[] {
    return this.appService.getCompanyIncome();
  }

  @Get('company-expenses')
  getCompanyExpenses(): number[] {
    return this.appService.getCompanyExpenses();
  }

  @Get('company-balance')
  getCompanyBalance(): number[] {
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
}
