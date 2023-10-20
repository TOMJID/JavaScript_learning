//callback and higher order function

// function square(x) {
//   console.log(`Square of ${x}: ${x * x}`);
// }
// square(5);

// const y = square;
// y(20);

// function higherOrderFunction(num, callback) {
//   callback(num);
// }
// higherOrderFunction(6, square);

//part 2

const taskOne = (callback) => {
  console.log("task1");
  callback();
};
const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task2. Data loading");
    callback();
  }, 2000);
};
const taskThere = (callback) => {
  console.log("task3");
  callback();
};
const taskFour = (callback) => {
  setTimeout(() => {
    console.log("task4. Data loading");
    callback();
  }, 2000);
};
const taskFive = () => {
  console.log("task5");
};
taskOne(() => {
  taskTwo(() => {
    taskThere(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});
