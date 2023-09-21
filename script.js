//ClipboardEvent
//1. oncopy
//2. oncut
//3. onpaste

var input = document.querySelector("input");
var p = document.querySelector("p");

//1
input.addEventListener("copy", function () {
  // console.log("you have copied");
  p.innerText = "you have copied";
});

//2
input.addEventListener("cut", function () {
  // console.log("you have cut");
  p.innerText = "you have cut";
});

//3
input.addEventListener("paste", function () {
  // console.log("you have pasted");
  p.innerText = "you have pasted";
});
