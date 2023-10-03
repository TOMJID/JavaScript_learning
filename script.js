var saveBtn = document.querySelector(".save-button");
var message = document.querySelector(".messages");

saveBtn.addEventListener("click", startClock);

function startClock() {
  var date = new Date();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  seconds = formetTime(seconds);
  minutes = formetTime(minutes);
  var time = hours + ":" + minutes + ":" + seconds;
  message.textContent = time;
  setInterval(startClock, 1000);
}

function formetTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
