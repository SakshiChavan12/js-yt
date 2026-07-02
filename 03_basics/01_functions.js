// function User(){
//     console.log("hey");
//     console.log("hello");
// }

// User()

// function addTwoNum( num1 , num2){//parameters
//         console.log(num1 + num2);  //Result undefined
// } 

// function addTwoNum( num1 , num2){//parameters
//        const result = (num1 + num2);
//        return result;     //Result 13
// } 

// addTwoNum(3,2) //arguments
// const result = addTwoNum(9,4);//return is stored in a variable to print ans
// console.log("Result" , result) 

function login(username ="sam"){ // when username is not defined then sam will print
    return ` ${username} is logged in`     
}

//login("Sakshi") //non will print bcoz of return
// console.log(login("Sakshi")); // Sakshi is logged in
// console.log(login()); //undefined

function calculateCartPrice (val1,val2,...num){ //rest operator
    return num;
}

//console.log(calculateCartPrice(400,300,200,600));


//passing obje in function
const user = {
    name : "Sakshi",
    age : 19
}

function handleObj(anyobject){
    console.log(`I am ${anyobject.name} and I am ${anyobject.age} old`)
}

// handleObj(user);
// handleObj( {
//     name : "Sakshi",
//     age : 19
// });

// array in function

const newArr = [100,400,569,299];

function handleArr(anyArr){
    return anyArr[1];
}

// console.log(handleArr(newArr))


// ++++++++++++++++ Scope +++++++++++++++++++++
//Global ans Block Scope

let a = 300; // global scope
let b = 20;

if(true){
    let a =30
    const b = 12
    var c = 40
}

console.log(a);
console.log(b);
console.log(c); //eventhough c is in block scope it is accssible this is why we do not use var