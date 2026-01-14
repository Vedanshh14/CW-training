// function handleResult() {
//   console.log("Final Result1");
// }

// function asyncFunc(handleResult) {
//   setTimeout(handleResult, 3000);
// }
// asyncFunc(handleResult);

//callback hell
//very complicated.

function callback() {
    console.log("Callback function")
}

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}
function step2(step1) {
  setTimeout(() => {
    console.log("Step 2 complete");
    step1(callback);
  }, 1000);
}

function step3(step2) {
  setTimeout(() => {
    console.log("Step 3 complete");
    step2(step1);
  }, 1000);
}

step3(step2);
