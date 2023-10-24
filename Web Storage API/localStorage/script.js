// Web storage API - allows us to store & read data in browser
//Web storage API is 2 type - LocalStorage, sessionStorage

//localStorage - store ,read,update and remove data
//no expiry date : data never gets lost even if you close the browser

//localStorage store data as key value pair - string

// console.log(localStorage);

//setItem(key,value)
// localStorage.setItem("userName", "Tomjid huda");
// localStorage.setItem("passward", "897898798");

//getItem(key)
// const userName = localStorage.getItem("userName");
// const userPassward = localStorage.getItem("passward");

// console.log(userName, userPassward);

//updateItem(key,value)
// localStorage.setItem("userName", "Tomjid");

//removeItem(key,value)
//  localStorage.removeItem("userName", "Tomjid huda");
// localStorage.removeItem("passward", "897898798");

//setItem(key,value)
const countries = ["Bangladesh", "India", "London"];
localStorage.setItem("countries", JSON.stringify(countries));

//getItem(key)
const con = JSON.parse(localStorage.getItem("countries"));
console.log(con);

// localStorage.clear();
