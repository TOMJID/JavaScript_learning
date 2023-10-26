// const post = [
//   {
//     tittle: "this is tittle1",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle2",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle3",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle4",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle5",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle6",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle7",
//     body: "this body",
//   },
//   {
//     tittle: "this is tittle8",
//     body: "this body",
//   },
// ];

//fetch data

const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("data is not fetched");
  }
};
//selection
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
  const post = await fetchData("https://jsonplaceholder.typicode.com/posts");
  const posts = post.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = ` <h4 class="post-tittle">${post.tittle}</h4>
        <p class="post-body">${post.body}</p> `;
    postsElement.appendChild(postElement);
  });
};
loadAllData();
