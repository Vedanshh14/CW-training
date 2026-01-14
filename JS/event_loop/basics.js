console.log(" Microtask vs Macrotask");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

console.log("End of script");
 
// PART 4: Microtask vs Macrotask
// End of script
// Microtask: Promise
// Macrotask: setTimeout
