var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function () {
  myVar.classList.add("h1-style");
});
myVar.addEventListener("mouseout", function () {
  myVar.classList.remove("h1-style");
});
