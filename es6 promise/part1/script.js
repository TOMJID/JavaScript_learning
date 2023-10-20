console.log("welcome");

//how to create a promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promose 1 completed");
  }, 2000);
});

// console.log(promise1)

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promose 2 completed");
  }, 1000);
});

Promise.race([promise1, promise2]).then((res) => console.log(res));
console.log("bye");
