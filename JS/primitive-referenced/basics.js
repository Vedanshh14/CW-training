console.log("=== PRIMITIVE TYPE EXAMPLE ===");

let a = 10;
let b = a;

console.log("Before change:");
console.log("a =", a);
console.log("b =", b);

b = 20;

console.log("After change:");
console.log("a =", a); // should stay 10
console.log("b =", b); // should be 20

console.log("\n=== NON-PRIMITIVE TYPE EXAMPLE ===");

let obj1 = { value: 10 };
let obj2 = obj1;

console.log("Before change:");
console.log("obj1 =", obj1);
console.log("obj2 =", obj2);

obj2.value = 20;

console.log("After property change:");
console.log("obj1 =", obj1); // changes
console.log("obj2 =", obj2); // changes

