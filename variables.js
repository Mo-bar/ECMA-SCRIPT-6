/*
var : 
 - function scope.
 - can be redeclare.
 - undifiened when accessing a variables before it's declared.
 - create properties in window object.

 ________________________
let : 
 - block scope.
 - can't be redeclared.
 - reference error when accessing in the window object.

 ________________________
const : 
 - block scope.
 - can't be redeclared.
 - refference error when accessing a variable before it's declare.
 - does't create properties in the window object.

*/

// ex
const CONSTVAR = 1;
if(true){
    const CONSTVAR = 2;
    console.log(CONSTVAR);
}
console.log(CONSTVAR);

const PERSON = {
    'nake_name' : 'mo',
    'age' : 25
}
PERSON.nake_name = 'mo-bark'

console.log(PERSON);