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
var v1 = false //? can be redeclare.
console.log(v1)

console.log("var__________________________________")

{var v2 = 'block scope'} //! v2  difined inside and outsite of block scope

function test(){
    var v2 = 'function scope'  //! v2 only difined in function scope
}
test()
console.log(v2)

/*
let : 
 - read, write
 - can't be redeclared.
 - block scope, function scope
 - reference error when accessing in the window object.


*/
console.log("let__________________________________")
let l = 10
l = 20; console.log(l) //? read-write

//! let l = 20 can't be redeclared.

{const l1 = 'BLOCK SCOPE'} //! l1 only difined inside of the block scope.
function fun2(){
    const l1 = 'function scope' //! cl only difined inside of the function scope
}

/*
 ________________________
const : 
 - read 
 - block scope, function scope.
 - can't be redeclared.
 - refference error when accessing a variable before it's declare.
 - does't create properties in the window object.

*/
console.log("CONST__________________________________")
const c = 10   //! read only

{const c1 = 'BLOCK SCOPE'} //! c1 only difined inside of the block scope.
function fun2(){
    const c1 = 'function scope' //! c2 only difined inside of the function scope
}


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
