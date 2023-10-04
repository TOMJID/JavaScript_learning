document.querySelector("#chackBtn").addEventListener("click", function () {
  var num = document.querySelector("#numTextField").value;

  try {
    if (num < 5) {
      throw "input is to low";
    } else if (num > 10) {
      throw "input is too high";
    }
  } catch (err) {
    console.log(err);
  }
});
