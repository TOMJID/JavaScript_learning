//4 ways to  call api - XMLHttpRequest,fetch,axios,jquery


//event - onload(),onerror()
//property - response, responseText, responseType, responseURL, status, statusText
//function - open(), send(), setRequestHeader()


const makeRequest = (method, RUL, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, RUL);

    xhr.onload = () => {
      let data = xhr.response;
      console.log(xhr.status);
      console.log(xhr.responseURL);
      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      console.log("error is here");
    };

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      console.log(res);
    }
  );
};
getData();

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   });
// };
// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: "foo1",
//     body: "bar1",
//     userId: 1,
//   });
// };
// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "This is change",
//   });
// };
// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };
