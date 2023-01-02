// BUILT IN GENERICS EXAMPLE
// const names: Array<string> = [];
// names[0].split(' '); // TS SUPPORT FOR THIS STRING METHOD

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// CREATING A GENERIC FUNCTION
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// // console.log(merge({name: 'Rusal'}, {age: 24}));
const mergedObj = merge({name: 'Rusal'}, {age: 24});
// const mergedObjTwo = merge<{name: string}, {age: number}>({name: 'Rusal'}, {age: 24});
console.log(mergedObj.age);

// ANOTHER GENERIC FUNCTION
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 0) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

// THE 'KEYOF' CONSTRAINT
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
// extractAndConvert({}, 'name'); // wouldn't work b/c it doens't meet our generic type constraint
extractAndConvert({ name: 'Rusal'}, 'name'); // would work b/c it meets our generic type contraint


// GENERIC CLASSES
class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Rusal');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// would not work well since this is a reference type, not primitive type
// const objStorage = new DataStorage<object>();

// GENERIC UTILITY TYPES
