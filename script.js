//JS BOM
//POPUP BOXES - alert , confirm , prompt

// alert("error here")

// confirm("are you sure")

// function deleteSomething() {
//   let value = confirm("Do you want to delete this ?");
//   if (value) {
//     console.log("deleted");
//   } else {
//     console.log("not deleted");
//   }
// }
// deleteSomething()

function welcomeMassage() {
  var welcome = document.createElement("h2");
  var text;
  var userName = prompt("enter your name");

  if (userName == null || userName == "") {
    text = "no name found";
  } else {
    text = userName;
  }
  var textNode = document.createTextNode(text);
  welcome.appendChild(textNode);
  document.body.appendChild(welcome);
}
welcomeMassage();
