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
//adding sound on click
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
//adding  and remove animation
function playAnimation(text) {
  var selectedButton = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function () {
    selectedButton.classList.remove("anim");
  }, 1000);
}
//adding Keypress listener
document.addEventListener("keypress", function (event) {
  var text = event.key;
  audioPlay(text);
  playAnimation(text);
});
