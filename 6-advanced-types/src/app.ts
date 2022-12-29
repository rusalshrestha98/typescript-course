// INTERSECTION TYPES EXAMPLE
type Admin = {
  name: string;
  priveleges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Rusal',
  priveleges: ['cook', 'clean'],
  startDate: new Date()
}

type Combinanble = string | number;
type Numeric = number | boolean;

type Universal = Combinanble & Numeric;

// ALTERNATIVE TO INTERSECTION TYPES WITH INTERFACES
interface AdminTwo {
  name: string;
  privileges: string[];
}

interface EmployeeTwo {
  name: string;
  startDate: Date;
}

interface ElevatedEmployeeTwo extends AdminTwo, EmployeeTwo {}

const e2: ElevatedEmployeeTwo = {
  name: 'Rusal',
  privileges: ['cook', 'clean'],
  startDate: new Date()
}

// TYPE GUARDS EXAMPLE #1
function add(a: Combinanble, b: Combinanble) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// TYPE GUARDS EXAMPLE #2
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('priveleges' in emp) {
    console.log('Priveleges: ' + emp.priveleges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

console.log(printEmployeeInformation(e1));

// DISCRIMINATED UNIONS EXAMPLE
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// TYPE CASTING EXAMPLE
const userInputElementNoCasting = document.getElementById('user-input-one')
const userInputElement = <HTMLInputElement>document.getElementById('user-input-one')!;
const userInputElement2 = document.getElementById('user-input-two')! as HTMLInputElement;

userInputElement.value = 'Hi there!';
userInputElement2.value = 'Hello World!';

// INDEX PROPERTIES EXAMPLE
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital letter!'
}

// FUNCTION OVERLOADS EXAMPLE
function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;
function addOverload(a: string, b: number): string;
function addOverload(a: number, b: string): string;
function addOverload(a: Combinanble, b: Combinanble) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// OPTIONAL CHAINING
const fetchedUserData = {
  id: 'u1',
  name: 'Rusal',
  job: { title: 'CEO', description: 'Owner of company' }
}
// if we are not sure if the 'job' property exists in the object
console.log(fetchedUserData?.job?.title);


// NULLIST COALESCING
const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);
