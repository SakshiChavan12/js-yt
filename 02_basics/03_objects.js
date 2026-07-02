//singleton
//Object.create

//Object literals

const mySyl = Symbol("newKey");
const JsUser = {
    name : "Sakshi",
    "fullName":"Sakshi Suresh Chavan",
    age : 20,
    [mySyl] : "symbol",
    location : "Pune",
    lastLoginDays : ["monday","tuesday"]
}


//console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySyl]); #imp in interview point of view how to access symbol

//Object.freeze(JsUser); //stops the changes
JsUser.name = "Rohan";
//console.log(JsUser.name)

JsUser.greeting = function(){
    console.log("Hello Beautiful");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);;
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());