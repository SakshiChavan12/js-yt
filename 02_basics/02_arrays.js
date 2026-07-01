const marvelHeros = ["superman","spiderman","thor"];
const dc = ["flash","batman","Ironman"];

//Merging arrays


//using push
// marvelHeros.push(dc);
// console.log(marvelHeros[3][1]);

//using concat
// const allHeros = marvelHeros.concat(dc);
// console.log(allHeros);

//using spread : it combine more than 2 arrays easily
const all_Heros = [...marvelHeros,...dc];
//console.log(all_Heros);

//using flat to reslove array with depth
const newArray = [1,[2,3],[5,[4,6,6,8]]];
// console.log(newArray.flat(Infinity));

// console.log(Array.isArray("Sakshi"));
// console.log(Array.from("Sakshi"));
// console.log(Array.from({name:"Sakshi"})); // converting object in array return empty array bcoz we have to define proper that should convet key or value in array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));