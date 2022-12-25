interface Named {
  readonly name?: string;
  outputName?: string;
  
  greet?(): void;
}

interface Greeting extends Named {
  greet(phrase: string): void;
}

class Person implements Greeting {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greeting;
user1 = new Person ('Rusal');
console.log(user1);


// user1 = {
//   name: 'Rusal',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

// user1.greet('Hi there, I am');


// INTERFACES AS FUNCTION TYPES
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};