var btn = document.querySelectorAll(".btn");

Array.from(btn).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});
