type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Rusal',
  privileges: ['cook', 'clean'],
  startDate: new Date()
}

type Combinanble = string | number;
type Numeric = number | boolean;

type Universal = Combinanble & Numeric;

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//   name: 'Rusal',
//   privileges: ['cook', 'clean'],
//   startDate: new Date()
// }
