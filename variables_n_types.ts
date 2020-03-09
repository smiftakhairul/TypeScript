export {}
let message = "First code in TypeScript.";
console.log(message);

let sum;
const title = 'TypeScript';
sum = 100;
sum += 100;
console.log(sum);
console.log(title);

let isBool: boolean = true;
console.log(isBool);
let track: string;
track = 'TPT Route';
const bank: string = 'SCB';
const amount: number = 80000;
let sentence: string = `Bank Deposit informaion '${bank} ${track} ${amount}BDT' added by user`;
console.log(sentence);
let nl: null = null;
let und: undefined = undefined;
let num: number = null;
let newSentence: string = undefined;

let list1: number[] = [1, 2, 2.5, 3];
let list2: Array<number> = [1, 2, 2.5, 3]; // same as above, no advantage or disadvantage particularly
let list3: [number, string, boolean] = [1, 'One', true];

enum Color {green, blue = 10, red, orange};
let enmVar: Color = Color.red;
console.log(enmVar);

let randomValue: any;
randomValue = 1;
randomValue = true;
randomValue = 'DDD';
randomValue = [1, 2, 3, 4, 5, 'sdkfjaks'];
randomValue = Color.red;
randomValue = [1, 2, 3, 4, 5, 'sdkfjaks'];
console.log(randomValue);
let multitype: number | string | boolean;
multitype = 10;
multitype = true;
multitype = 'Hdkkdahgkasd';


function hasName(obj: any): obj is {name: string} {
    return !!obj && 
                typeof obj === 'object' &&
                'name' in obj;
}

let anyVariable: any = 10; // `any` type stops validation checking
/* anyVariable(); anyVariable.toUpperCase(); will give error or warning */

let unknownVariable: unknown = 'name'; // good practice
/* unknownVariable(); anyVariable.toUpperCase(); both will give warning or error, more possible code 
can't be compiled */ 
(unknownVariable as string).toUpperCase(); // will work because of typecasting
if (hasName(unknownVariable)) {
    console.log(unknownVariable.name);
}




let quote;
quote = 'abc';
console.log((quote as string).toUpperCase());
let temp = (<string> quote).toUpperCase();
console.log(temp);


