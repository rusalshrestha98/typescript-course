// FIRST DECORATOR + DECORATOR FACTORY
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function(constructor: any) {
      console.log('Rendering template');
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = p.name;
      }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
      console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);


// DIVING INTO PROPERTY DECORATORS

// decorator for property
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// decorator for setter accessor method
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// decorator for getter accessor method
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// decorator for the parameter
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number

  @Log2
  set price(val: number) {
      if (val>0) {
          this._price = val;
      } else {
          throw new Error('Invalid Price - should be positive');
      }
  }

  constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
      return this._price + (1 + tax);
  }
}

// VALIDATION WITH DECORATORS
class Course {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  console.log(createdCourse);
})