/** 
 * ! 
 *? call stack
 * Mechanism to make Interpreter Tracks your calls
 * Every called function added to the stack
 * Every executed function removed from the stack
 * Then Interpreter continue calling from last point reached.
 * call stack detect web api and send it to the brower (to handle it)
 *
 * ? Web API
 * Methods available in Envirement ( browser)
 * when complete, it add The callback_function to callback queue
 *
 * ? Event loop
 * Wait the coll stack untill finiched
 * Get callbacks from callback queue
 * Add callbacks to call stack
 *
 * ? Call back queue
 */

console.log("One");
window.setTimeout(() => console.log("two"), 0);
console.log("three");
