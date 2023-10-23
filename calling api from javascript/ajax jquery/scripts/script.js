// 4 ways to call a api - XMLHttpRequest,fetch,axios,jquery

//add jquery libraray cdn
//ajax = asynchronous JS  and xml

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

//geting data
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
    (res) => console.log(res)
  );
};

getData();

//createing data
const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};

createData();

//updateing data
const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id: 1,
    title: "fooma",
    body: "barma",
    userId: 1,
  }).then((res) => console.log(res));
};

updateData();

//patching/changing data

const patchData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
    title: "foothrtyht",
  }).then((res) => console.log(res));
};

patchData();

//deleteing data
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(
    (res) => console.log(res)
  );
};

deleteData();
