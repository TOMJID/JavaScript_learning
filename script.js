var lan = document.querySelectorAll(".myButton").length;
for (var x = 0; x < lan; x++) {
  document
    .querySelectorAll(".myButton")
    [x].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
      playAnimation(text);
    });
}
function audioPlay(text) {
  switch (text) {
    case "a":
      var audio = new Audio("Sounds/1.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("Sounds/2.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("Sounds/3.mp3");
      audio.play();
      break;
  }
}
//adding animation
function playAnimation(text) {
  var selectedButton = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function () {
    selectedButton.classList.remove("anim");
  }, 1000);
}
