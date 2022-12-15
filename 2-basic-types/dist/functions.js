"use strict";
function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result: ' + num);
}
;
function nothing(num) {
    return;
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult; // would not work because this has 1 arg only 
console.log(combineValues(8, 8));
function addWithCallback(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
;
addWithCallback(10, 20, (result) => {
    console.log(result);
});
