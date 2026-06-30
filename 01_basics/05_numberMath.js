// let score = 40;
// console.log(score);

const balance = new Number(1020);
// console.log(balance);
// console.log(balance.toString().length);

let hundred =  1000.2324;

// console.log(hundred.toFixed(2));
// console.log(hundred.toLocaleString('en-IN'));
// console.log(hundred.toPrecision(4));
// console.log(hundred.toExponential(1));

//++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++

// console.log(typeof Math); //math is a object
// console.log(Math.abs(-3));
// console.log(Math.round(4.7));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(3.9));

console.log(Math.random()); //random give value between 0 and 1
console.log((Math.random()*10) +1); //shifting value for left and  add 1 for avoid 0.04 extra 0's ans
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1))+ min); 