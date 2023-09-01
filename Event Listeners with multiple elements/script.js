for (var x = 0; x < 3; x++) {
  document
    .querySelectorAll(".myButton")
    [x].addEventListener("click", function () {
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + "is clicked";
    });
}
