//JS BOM
//JS Timing event methods
//1.setTimeOut()
//2.setInterval()

//1.

// setTimeout(() => {
//   console.log("hi");
// }, 2000);

// setTimeout(display, 2000);
// function display() {
//   console.log("display function");
// }

var save = document.querySelector(".save-button");
var massage = document.querySelector(".massage");

save.addEventListener("click", saveUser);

function saveUser() {
  massage.textContent = "user details saved";

  setTimeout(() => {
    massage.textContent = "";
  }, 1500);
}

//2
var save1 = document.querySelector(".save-button-1");
var massage1 = document.querySelector(".massage-1");

save1.addEventListener("click", displayCount);

function displayCount() {
  let count = 0;
  massage1.textContent = count;

  setInterval(() => {
    count++;
    massage1.textContent = count;
  }, 1000);
}
