const form = document.querySelector("form");
const name = form.querySelector("div #name");
// console.log(Name);
const email = form.querySelector("div #email");
// console.log(email);
const password = form.querySelector("div #password");
// console.log(password);

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  var userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  //after submiting at will make the form empty
  name.value = "";
  email.value = "";
  password.value = "";
}
