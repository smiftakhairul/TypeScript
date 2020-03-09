// export {}

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
export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    draw = () => {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }

    getX = () => {
        return this.x;
    }

    setX = (x: number) => {
        if (x <= 0) {
            throw new Error('value of x can\'t be less than 1');
        }
        this.x = x;
    }
}
