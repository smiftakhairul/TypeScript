"use strict";
exports.__esModule = true;
var a, b;
// function add(a:number, b:number) {
//     return a + b;
// }
// function add(a:number, b:number):number {
//     return a + b;
// }
function add(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(add(10, 100));
console.log(add(10));
// arrow functions
var arrowFunction = function (message) {
    console.log(message);
};
arrowFunction('Hello there');
