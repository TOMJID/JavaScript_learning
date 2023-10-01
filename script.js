//DragEvent Object
//1.ondragstart
//2.ondrag
//3.onragend
//4.ondragenter
//5.ondragleave
//6.ondragover
//7.ondrop

var p = document.querySelector("p");
var div = document.querySelector(".div1");


//to get the drag element
p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text", e.target.id);
});


//to save the drag element on the div
div.addEventListener("drop", function (e) {
  let id = e.dataTransfer.getData("text");
  div.appendChild(document.getElementById(id));
  e.preventDefault();
});


//to stop removing the drag element from div
div.addEventListener("dragover", function (e) {
  e.preventDefault();
});
