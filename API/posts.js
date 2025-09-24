const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPosts(data);
    });
};

// {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"

// }

// const displayPosts = (posts) => {
//   //   for (let i = 0; i < posts.length; i++) {
//   //     console.log(posts);
//   //   }

//   // for(let post of posts){
//   //     console.log(post);
//   // }

//   //1. get the container

//   posts.forEach((post) => {
//     console.log(post);
//   });
// };

const displayPosts = (posts) => {
  //1. get the container and empty the container
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    // console.log(post);

    //2. create element

    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>
       ${post.body}
        </p>
      </div>`;

    //3. add to the container
    postsContainer.append(postCard);
  });
};

loadPost();
