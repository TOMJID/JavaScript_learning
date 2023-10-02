//BOM {Browser Object Model}
//1.window object
//2.location object

console.clear();

var locationDiv = document.querySelector(".location-div");
console.log(locationDiv);

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.hostname;

var p3 = locationDiv.children[2];
p3.textContent = location.protocol;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;




var button = document.querySelector("#visit-button");
button.addEventListener("click", function () {
  location.assign("https://www.google.com");
});
