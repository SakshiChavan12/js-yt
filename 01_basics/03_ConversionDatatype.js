//let score = "abc" ; // check same for null and undefined value and for boolen values

/*
Conversions value
"33" => 33
"33abc" => NaN
true => 1 and false => 0
null => 0 / NaN
undefined => undefined
*/

//console.log(typeof score);
//console.log(typeof (score));

//conversion of string into number
// let valueInNumber = Number(typeof score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //it has coverted string into number but its value remains not a number i.e NaN

//conversion in booleanValues
/*let valueInBoolean = Boolean(score);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);
*/

/*
Conversion values
"33abc" => true
" " => flase //empty string
null and undefined => false
*/

//**********************Operations****************************** */

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3**3); //power
// console.log(3**2); //3 to the power 2
// console.log(3%3); //remiander
// console.log(3/3);

/*let str1 = "hello";
let str2 = " Sakshi :)";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 + 2);
console.log( 2+ 2 + "3" + 4 + 4); */

//if we start with a string then whole next part beacame string 
//but if we start with num then it will perform the operations


// console.log(+true); // o/p => 1
// console.log(true+); // error
//console.log(+""); // => 0

//Postfix and perfix increment

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// //Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// //Expected output: "a:4, b:4"

//Comparison

//here null is treated as 0
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null < 0);
// console.log(null == 0);

// console.log(undefined < 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);

//Summary of datatypes

/*Return type of variables in JavaScript
=======================
 Primitive Datatypes
---------------------------------------------------
       Number =>     number
       String  =>        string
       Boolean  =>    boolean
       null  =>             object
       undefined  =>  undefined
       Symbol  =>      symbol
       BigInt  =>         bigint
========================
 Non-primitive Datatypes
---------------------------------------------
       Arrays  =>       object
       Function  =>  function
       Object  =>       object
*/

// let bigNum = 3444422223333444445n;
// console.log(typeof bigNum);

