// Web storage API - allows us to store & read data in browser
//Web storage API is 2 type - LocalStorage & sessionStorage

// LocalStorage vs sessionStorage
//10mb vs 5mb
//permanent vs session (tab)

// sessionStorage.setItem("user1", "tomjid");
// sessionStorage.setItem("user2", "tom");
// const userName = sessionStorage.getItem("user");

// console.log(userName);

// sessionStorage.removeItem("user");

// sessionStorage.clear();

const user = { id: "101", name: "tomjid" };
sessionStorage.setItem("users", JSON.stringify(user));

const names = JSON.parse(sessionStorage.getItem("users"));
console.log(names);
