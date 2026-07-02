//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();

( function chai() {
    //named IIFE
    console.log("Heloo")
})();

( () => {
    //Unnamed IIFE
    console.log("Heloo")
})();

( (name) => {
    console.log(`${name}`)
})("hitesh")

//Note : between 2 IIFE ';' is important