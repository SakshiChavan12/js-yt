let myDate = new Date();
// console.log(typeof myDate); //date is function as well as object depending on how we declare it
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toTimeString());

//let myCreatedDate = new Date(2023,0,30); // month start from 0 index
let myCreatedDate = new Date("2023-01-12"); //month start from 1 index for YYYY-MM-DD format

//console.log(myCreatedDate.toLocaleDateString());

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());