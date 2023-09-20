//keybared Event object
//1.Keydown - pressing a key, can repeat
//2.keypress (may not supported by some borwsers)
//3.keyup

//some properties = key,keyCode,code,shiftKey,ctrlKey,prpeat

var textarea = document.querySelector("textarea");

//1
textarea.addEventListener("keydown", function (e) {
  console.log("keydown");
  if (e.repeat) {
    alert("do not repeat");
  }
});

//2
// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });

//3
// textarea.addEventListener("keyup", function (e) {
//   // console.log(e.key);
//   // console.log(e.keyCode);
//   // console.log(e.code);
//   // console.log(e.shiftKey);
//   if (e.shiftKey) {
//     console.log("shift +" + e.key);
//   }
// });
