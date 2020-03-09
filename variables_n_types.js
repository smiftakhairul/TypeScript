"use strict";
exports.__esModule = true;
var message = "First code in TypeScript.";
console.log(message);
var sum;
var title = 'TypeScript';
sum = 100;
sum += 100;
console.log(sum);
console.log(title);
var isBool = true;
console.log(isBool);
var track;
track = 'TPT Route';
var bank = 'SCB';
var amount = 80000;
var sentence = "Bank Deposit informaion '" + bank + " " + track + " " + amount + "BDT' added by user";
console.log(sentence);
var nl = null;
var und = undefined;
var num = null;
var newSentence = undefined;
var list1 = [1, 2, 2.5, 3];
var list2 = [1, 2, 2.5, 3]; // same as above, no advantage or disadvantage particularly
var list3 = [1, 'One', true];
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["blue"] = 10] = "blue";
    Color[Color["red"] = 11] = "red";
    Color[Color["orange"] = 12] = "orange";
})(Color || (Color = {}));
;
var enmVar = Color.red;
console.log(enmVar);
var randomValue;
randomValue = 1;
randomValue = true;
randomValue = 'DDD';
randomValue = [1, 2, 3, 4, 5, 'sdkfjaks'];
randomValue = Color.red;
randomValue = [1, 2, 3, 4, 5, 'sdkfjaks'];
console.log(randomValue);
var multitype;
multitype = 10;
multitype = true;
multitype = 'Hdkkdahgkasd';
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
var anyVariable = 10; // `any` type stops validation checking
/* anyVariable(); anyVariable.toUpperCase(); will give error or warning */
var unknownVariable = 'name'; // good practice
/* unknownVariable(); anyVariable.toUpperCase(); both will give warning or error, more possible code
can't be compiled */
unknownVariable.toUpperCase(); // will work because of typecasting
if (hasName(unknownVariable)) {
    console.log(unknownVariable.name);
}
var quote;
quote = 'abc';
console.log(quote.toUpperCase());
var temp = quote.toUpperCase();
console.log(temp);
