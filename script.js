//focusEvent Object
//can't use on this element = {<br>,<head>,<title>,<iframe>,<meta>,<param>,<script>,<base>,<bdo>}

//1. onblur
//2. onfocus
//3. onfocusin
//4. onfocousout

//1
var input = document.querySelector("input");
input.addEventListener("blur", function (e) {
  // console.log("blur is occured");
  // input.style.backgroundColor = "transparent";
  // input.style.padding = "0";
  // console.log(e.target.value);
  input.value = e.target.value.toUpperCase();
});

//2
input.addEventListener("focus", function () {
  // console.log("focus is occured");
  // input.style.backgroundColor = "red";
  // input.style.padding = "2rem";
});

// //3
// input.addEventListener("focusin", function () {
//   console.log("focusin is occured");
// });

// //4
// input.addEventListener("focusout", function () {
//   console.log("focusout is occured");
// });
