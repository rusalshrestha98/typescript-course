abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Rusal') {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Jaren');
console.log('EMPLOYEE 1: ', employee1);

console.log('FISCAL YEAR: ', Department.fiscalYear);

const it = new ITDepartment('d1', ['Rusal']);

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = "You are amazing!";

accounting.addReports('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// won't work because employees is a property that is only accessible inside the class
// accounting.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();