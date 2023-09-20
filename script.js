// mouse event dosn;t work on this element tags{html,head,meta,title,br,style,script,iframe,param,base,bdo}
//all mouse event name
//1.onclick
//2.onblclick
//3.onmousedowm
//4.onmousedup
//5.onmouseenter
//6.onmouseselesve
//7.onmousemove
//8.onmouseover

var div = document.querySelector("div");
console.clear();

//1

div.addEventListener("click", function (e) {
  //   console.log("tomjid");
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.innerHTML);
  // console.log(e.target.innerText);
  // console.log(e.target.textContent);
});

//2

// div.addEventListener("dblclick", function () {
//   console.log("tomjid 2");
// });

//3

// div.addEventListener("mousedown", function () {
//   console.log("tomjid down");
// });

//4

// div.addEventListener("mouseup", function () {
//   console.log("tomjid up");
// });

//5

// div.addEventListener("mouseenter", function () {
//   console.log("tomjid enter");
// });

//6

// div.addEventListener("mouseleave", function () {
//   console.log("tomjid leave");
// });

//7

// div.addEventListener("mouseover", function () {
//   console.log("tomjid over");
// });

//8

// div.addEventListener("mousemove", function (e) {
//   console.log("tomjid move");

//   to show windows position
//   console.log("clientX =" + e.clientX + ", clientY =" + e.clientY);

//   to show the position inside of the element
//   console.log("ofsetX =" + e.offsetX + "ofsetY =" + e.offsetY);
// });
