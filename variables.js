/*
var : 
 - read , write
 - function scope.
 - can be redeclare.
 - undifiened when accessing a variables before it's declared.
 - create properties in window object.

*/
var v1
v1 = true
var v1 = false


/*
let : 
 - read, write
 - block scope, function scope
 - can't be redeclared.
 - reference error when accessing in the window object.

 ________________________
const : 
 - read 
 - block scope, function scope.
 - can't be redeclared.
 - refference error when accessing a variable before it's declare.
 - does't create properties in the window object.

*/
const x = 10
//! x = 20  read only

// ex
const CONSTVAR = 1;
if (true) {
	const CONSTVAR = 2;
	console.log(CONSTVAR);
}
console.log(CONSTVAR);

const PERSON = {
	nake_name: "mo",
	age: 25,
};
PERSON.nake_name = "mo-bark";

console.log(PERSON);
