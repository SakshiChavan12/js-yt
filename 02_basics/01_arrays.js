//Javascript array-copy operations create shallow copies and deep copies 
//shallow copies share same reference point
//deep copies properties do not share the same reference

const myArr = [0,1,2,3,4,5];
//console.log(myArr);

//methods of array
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.shift();
//console.log(myArr);

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(9));

const newArr = myArr.join(); //join connects with myArr and convert values in string
// console.log(myArr);
// console.log(newArr);


//Slice - returns a section of array
//Splice - return a section and remove it from original arr and includes the last element 

const arr = ["ram","teja","rohan","raj"];
console.log(arr.slice(1,2));
console.log(arr.splice(1,2)); //last index inculded
console.log(arr); // original array changes after splice
