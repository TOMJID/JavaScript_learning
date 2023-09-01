document
  .querySelectorAll(".myButton")[0]
  .addEventListener("click", function () {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
  });
document
  .querySelectorAll(".myButton")[1]
  .addEventListener("click", function () {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
  });
document
  .querySelectorAll(".myButton")[2]
  .addEventListener("click", function () {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
  });
