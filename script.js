//JS BOM
//POPUP BOXES - alert , confirm , prompt

// alert("error here")

// confirm("are you sure")

function deleteSomething() {
  let value = confirm("Do you want to delete this ?");
  if (value) {
    console.log("deleted");
  } else {
    console.log("not deleted");
  }
}
deleteSomething()