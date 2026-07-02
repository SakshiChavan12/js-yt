//revise this again
//this keyword refers to the context where a piece of code

const user = {
    name : "Ritesh",
    price : 333,
    message : function(){
        console.log(`${this.name} , welcome to website`);
    }
}

// user.message();
// user.name="Sakshi";
// user.message();

//Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding.

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//      let username = "Hitesh"
//    console.log(this.username);
// }
// chai()

// const chai = () => {
//      let username = "Hitesh"
//    console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => { // always clury brackets should have return type
//     return num1 + num2 //here explicitly 
// }

// console.log(addTwo(4, 5))
// const addTwo = (num1, num2) =>  num1 + num2
//const addTwo = (num1, num2) => ( num1 + num2) //here implicitly
const addTwo = (num1, num2) =>  ({
    username : "Hitesh"      //object should raped in the round brackets
})
console.log(addTwo(4, 5))