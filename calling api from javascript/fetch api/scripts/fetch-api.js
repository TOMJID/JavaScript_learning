//4 ways to  call api - XMLHttpRequest,fetch,axios,jquery

//fetch() has replaced XMLHttpRequest
//fatch() - global method for making HTTP request
//2 way to call - then,async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - dose not support at older browser

// //then ->
// //Getting a resource
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// //error handleing
// fetch("https://jsonplaceholder.typicode.com/posts/109")
//   .then((res) => {
//     if (!res.ok) {
//       const massage = `error : ${res.status}`;
//       throw new Error(massage);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //createing a resource
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       const massage = `error : ${res.status}`;
//       throw new Error(massage);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //Updating a resource
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     id: 1,
//     title: "foobu",
//     body: "barbu",
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       const massage = `error : ${res.status}`;
//       throw new Error(massage);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //Patching a resource - changing a resource
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     title: "fooYTRbu",
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       const massage = `error : ${res.status}`;
//       throw new Error(massage);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// //Deleting a resource
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       const massage = `error : ${res.status}`;
//       throw new Error(massage);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//async await
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const massage = `error : ${res.status}`;
    throw new Error(massage);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};

getData();

const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "fooBA",
      body: "barba",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};
updateData();

const patchingData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "fooTUIYU",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};

patchingData();

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};

deleteData();
