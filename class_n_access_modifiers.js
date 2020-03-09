"use strict";
// export {}
exports.__esModule = true;
// class Employee {
//     // private employeeName: string;
//     protected employeeName: string;
//     constructor(name: string) {
//         this.employeeName = name;
//     }
//     greet() {
//         console.log(`Hello ${this.employeeName}`);
//     }
// }
// let emp1 = new Employee('Ikram');
// // console.log(emp1.employeeName);
// emp1.greet();
// class Manager extends Employee {
//     constructor(name: string) {
//         super(name);
//     }
//     delegate() {
//         console.log(`Manager task delegated to ${this.employeeName}`);
//     }
// }
// let mng = new Manager('User1');
// // console.log(mng.employeeName);
// mng.delegate();
// mng.greet();
// example 2
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.draw = function () {
            console.log("X: " + _this.x + ", Y: " + _this.y);
        };
        this.getX = function () {
            return _this.x;
        };
        this.setX = function (x) {
            if (x <= 0) {
                throw new Error('value of x can\'t be less than 1');
            }
            _this.x = x;
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
