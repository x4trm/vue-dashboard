import { defineStore } from "pinia";
import axios from "axios";

interface CompanyState {
  balance: number[];
  expenses: number[];
  incomes: number[];
  employees: number[];
  salary: number[];
  labels: string[];
  quarterLabels: string[];
  departments: string[];
}

export const useCompanyStore = defineStore({
  id: "company",
  state: (): CompanyState => ({
    balance: [],
    expenses: [],
    incomes: [],
    employees: [],
    salary: [],
    labels: [],
    quarterLabels: [],
    departments: [],
  }),
  actions: {
    async fetchCompanyBalance() {
      const { data } = await axios.get("http://localhost:3000/company-finance");
      this.balance = data.balance;
      this.expenses = data.expenses;
      this.incomes = data.incomes;
    },
    async fetchNumbersOfEmployees() {
      const { data } = await axios.get("http://localhost:3000/employees");
      this.employees = data;
    },
    async fetchSalary() {
      const { data } = await axios.get("http://localhost:3000/salary");
      this.salary = data;
    },
    async fetchLabels() {
      const { data } = await axios.get("http://localhost:3000/labels");
      this.labels = data;
    },
    async fetchQuarter() {
      const { data } = await axios.get("http://localhost:3000/q-labels");
      this.quarterLabels = data;
    },
    async fetchDepartments() {
      const { data } = await axios.get("http://localhost:3000/department");
      this.departments = data;
    },
  },
});
