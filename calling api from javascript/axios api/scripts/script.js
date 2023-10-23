//4 ways to  call api - XMLHttpRequest,fetch,axios,jquery

//axios
//axios is a JS  library
//it helps to mak3e request from browser (plain js/Vue/React/Angular),node.js

// + very easy to use
// + it supports all modren browser including IE
// + it retruns promise
// + throws error brilliantly
// + no need to set header cause axios is intelligent

//axios(config)
//axios( url [, config])

//axios.get( url [, config])
//axios.post( url [, config])
//axios.put( url [, config])
//axios.patch( url [, config])
//axios.delete( url [, config])

//axios returns response object - data,status,statusText,headers,config

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       id: 1,
//       title: "foona",
//       body: "barna",
//       userId: 1,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       body: "barnafdgefg",
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

//part2
const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();

const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foortrt",
      body: "barrtrt",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

createData();

const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "foortrt",
      body: "barrtrt",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

updateData();

const patchData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "PATCH",
    data: JSON.stringify({
      title: "foortrtrthrthy",
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

patchData();

const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

deleteData();
