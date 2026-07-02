// if else condition 
// < , > <= , >= , === , == , != , !==

//switch case statement



// falsy value:
// false , 0 , -0 , null , undefined , "", BigInt 0n , NaN

// truth value:
// "0" , 'false' , " " , [] , {} , function(){}

// const emptyObj = {}

// if(Object.keys(emptyObj).length == 0){
//     console.log("Object is Empty");
// }

//Interview que

// false == 0 -> true
// false == "" -> true
// 0 == "" -> true 

//Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 45 // printout 10
console.log(val1);

// Terniary operator

// condition ? true : false
