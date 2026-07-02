//const tinderUser = new Object(); //singleton object
const tinderUser = {}; //non-singlton obj
tinderUser.name = "Sakshi";
tinderUser.age = 19;
tinderUser.id = "1353";

//console.log(tinderUser);


// const newUser = {
//     email : "Rohan@gmail.com",
//     name :{
//         firstName : "Rohan",
//         lastName : "Chaudhary"
//     }
// }

// console.log(newUser.name.lastName);

// const obj1 = {1:"a" , 2:"b"};
// const obj2 = {3:"a" , 4:"b"};
// const obj3 = {5:"a" , 6:"b"};

//const obj4 = {obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)//Oject.assign(target,source) all the ohjects will combine together in target i.e{}
// const obj4 = {...obj1, ...obj2 , ...obj3}; //using spread

// console.log(obj4)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); //returns in array format
// console.log(Object.entries(tinderUser)); //every key value become separate array

const course = {
    courseName : "JS in hindi",
    price : 999,
    courseInstructor: "hitesh",
}

const {courseInstructor : instructor} = course //destructure of obj
//console.log(courseInstructor)
console.log(instructor)