//! Anonymous function
var test = function() {console.log("Hello from anonymous function");}

test()  // java script traite la reference de  fonction comme une fonction; on peut dire que les fonctions sont type donne dans le java script


 //? on peut pass une fonction comme un parametre  
function callAnotherFunction(callbackfun){ //? callAnotherFunction s'appel high order function
    callbackfun()
}

callAnotherFunction(test)

//! callback function
setTimeout(
    () => console.log("hello from callback function"),
    0
)

const arr = [12,23,34,435,345]
arr.forEach(e => console.log(e))