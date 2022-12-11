function add(n1: number, n2: number): number {
  return n1 + n2;
};

function printResult(num: number): void {
  console.log('Result: ' + num);
};

function nothing(num: number): undefined {
  return;
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // would not work because this has 1 arg only 

console.log(combineValues(8,8));

function addWithCallback(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
};

addWithCallback(10, 20, (result) => {
  console.log(result);
});