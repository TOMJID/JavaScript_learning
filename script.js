var lan = document.querySelectorAll(".myButton").length;
for (var x = 0; x < lan; x++) {
  document
    .querySelectorAll(".myButton")
    [x].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      switch (text) {
        case "Button 1":
          var audio = new Audio("Sounds/1.mp3");
          audio.play();
          break;
        case "Button 2":
          var audio = new Audio("Sounds/2.mp3");
          audio.play();
          break;
        case "Button 3":
          var audio = new Audio("Sounds/3.mp3");
          audio.play();
          break;
      }
    });
}
