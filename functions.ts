export {}

let a:unknown, b:unknown;
// function add(a:number, b:number) {
//     return a + b;
// }

// function add(a:number, b:number):number {
//     return a + b;
// }

function add(a:number, b?:number):number { // with optional parameter
    if (b) {
        return a + b;
    } else {
        return a;
    }
}
console.log(add(10, 100));
console.log(add(10));

// arrow functions
// let arrowFunction = (message) => {
//     console.log(message);
// }
let arrowFunction = (message) => console.log(message); // for one line code
arrowFunction('Hello there');