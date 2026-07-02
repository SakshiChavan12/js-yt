//Closure :  combination of a function bundled together

function one(){
    const username = "Sakshi";

    function two (){
        const website = "youtube";
        console.log (username);
    }

    //console.log(website);
    //two()
    console.log("hello")
}

//one()

// if(true){
//     const username = "Sakshi"
//     if(username == "Sakshi"){
//         const website = " youtube";
//         console.log(username + website);
//     }
//    // console.log(website);
// }

//console.log(username)


//+++++++++++++++++++ intersting ++++++++++++

console.log (addone(4));
function addone(num){
    return num + 1
}


//console.log(twoadd(7)); //can not call function first

const twoadd = function(num){
    return num + 2;
}

console.log(twoadd(7));