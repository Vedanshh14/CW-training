console.log("=== Closure Demo Start ===");

function outer() {
    let outerVar = "I'm in the outer scope!";

    function inner() {
        console.log("inner sees:", outerVar);
        outerVar = "Updated";
    }

    return inner;
}

const closure = outer();

console.log("Calling closure first time:");
closure();

console.log("Calling closure second time:");
closure();

console.log("=== Closure Demo End ===");
