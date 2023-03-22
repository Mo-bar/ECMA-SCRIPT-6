const { chownSync } = require("fs");

//! Anonymous function
var test = function () {
	console.log("Hello from anonymous function");
};

test(); // java script traite la reference de  fonction comme une fonction; on peut dire que les fonctions sont type donne dans le java script

//? on peut pass une fonction comme un parametre
function callAnotherFunction(callbackfun) {
	//? callAnotherFunction s'appel high order function
	callbackfun();
}

callAnotherFunction(test);

//! callback function
setTimeout(() => console.log("hello from callback function"));

const arr = [12, 23, 34, 435, 345];
arr.forEach((e) => console.log(e));

//! arrow function

//? with no params

let fun1 = () => 2;
let fun2 = (_) => 3;
console.log(fun1(), fun2());

let obj = { name: "object", fun: function() {console.log(this)} };
obj.fun();
