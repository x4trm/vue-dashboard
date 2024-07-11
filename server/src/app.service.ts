import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCompanyIncome(): number[] {
    const incomes: number[] = [];
    const min = 0;
    const max = 100000;

    for (let i = 0; i < 12; i++) {
      const randomIncome = Math.floor(Math.random() * (max - min + 1)) + min;
      incomes.push(randomIncome);
    }

    return incomes;
  }

  getCompanyExpenses(): number[] {
    const expenses: number[] = [];
    const min = 0;
    const max = 100000;

    for (let i = 0; i < 12; i++) {
      const randomExpense = Math.floor(Math.random() * (max - min + 1)) + min;
      expenses.push(randomExpense);
    }

    return expenses;
  }

  getCompanyBalance(): number[] {
    const incomes = this.getCompanyIncome();
    const expenses = this.getCompanyExpenses();
    const balance: number[] = [];

    for (let i = 0; i < incomes.length; i++) {
      balance.push(incomes[i] - expenses[i]);
    }

    return balance;
  }

  getNumbersOfEmployees(): number[] {
    const employees: number[] = [];
    const min = 5;
    const max = 40;

    for (let i = 0; i < 4; i++) {
      const randomEmployees = Math.floor(Math.random() * (max - min + 1)) + min;
      employees.push(randomEmployees);
    }

    return employees;
  }

  getSalary(): number[] {
    const expenses = this.getCompanyExpenses();
    const quarterlySalaries: number[] = [];

    for (let i = 0; i < 4; i++) {
      const quarterlyExpense = expenses
        .slice(i * 3, i * 3 + 3)
        .reduce((acc, curr) => acc + curr, 0);
      const quarterlySalary = quarterlyExpense * 0.5;
      quarterlySalaries.push(quarterlySalary);
    }

    return quarterlySalaries;
  }

  getLabels(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  getQuarter(): string[] {
    return ['I', 'II', 'III', 'IV'];
  }
}
