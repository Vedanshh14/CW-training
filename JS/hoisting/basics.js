console.log("=== VAR HOISTING ===");

console.log(a); 
var a = 10;
console.log(a); 

console.log("\n=== LET HOISTING ===");

console.log(b); // ❌ ReferenceError
let b = 20;
console.log(b);