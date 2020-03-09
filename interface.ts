export {}

// example 1
// let drawPoint = (point: {x: number, y: number}) => {
//     //
// }

interface Point {
    x: number,
    y: number,
    // draw: () => void
}

let drawPoint = (point: Point) => {
    //
}

drawPoint({
    x: 1,
    y: 2
});



// example 2
interface Person { // interface
    firstName: 'Bruce',
    lastName: 'Wayne'
}

function fullName(person: {firstName: string, lastName: string}): string {
    return `${person.firstName} ${person.lastName}`;
}
function fullNameInterface(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
console.log(fullName(p));
// console.log(fullNameInterface(p));
