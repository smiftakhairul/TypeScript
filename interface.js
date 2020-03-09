"use strict";
exports.__esModule = true;
var drawPoint = function (point) {
    //
};
drawPoint({
    x: 1,
    y: 2
});
function fullName(person) {
    return person.firstName + " " + person.lastName;
}
function fullNameInterface(person) {
    return person.firstName + " " + person.lastName;
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
console.log(fullName(p));
// console.log(fullNameInterface(p));
