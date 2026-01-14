// new Promise(function)
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve();
  else reject();
})
  .then(() => {
    console.log("Done");
  })
  .catch(() => {
    console.log("error occurred");
  });

//passing props by resolve reject

new Promise((resolve, reject) => {
  const success = false; // Simulate success or failure
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed.");
  }
})
  .then((result) => {
    console.log(result); // Handles resolved value
  })
  .catch((error) => {
    console.error(error); // Handles rejected value
  })
  .finally(() => {
    console.log("Promise settled."); // Executes regardless of success or failure
  });

//.then() chaining
// use return keyword in previous .then()
