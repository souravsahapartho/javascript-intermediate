// const LoadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     //promise of json  data
//     .then((data) => console.log(data));
// };

const LoadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      displayPost(json);
    });
};

const displayPost = (posts) => {
  // posts.forEach((post) => {
  //   console.log(post);
  // });

  const postContainer = document.getElementById("post-container");
  //1.get the container
  // console.log(postContainer);
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    console.log(post.title);
    //2.create HTML element
    const li = document.createElement("li");
    li.innerText = post.title;
    console.log(li);

    //3. add li into container
    postContainer.appendChild(li);
  });
};
