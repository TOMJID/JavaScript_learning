//Synchronous vs Asynchronous
const taskOne = () => {
  console.log("task1");
};
const taskTwo = () => {
  setTimeout(() => {
    console.log("task2. Data loading");
  }, 2000);
};
const taskThere = () => {
  console.log("task3");
};
const taskFour = () => {
  console.log("task4");
};
const taskFive = () => {
  console.log("task5");
};
taskOne();
taskTwo();
taskThere();
taskFour();
taskFive();
