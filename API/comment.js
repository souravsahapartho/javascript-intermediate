const loadcomment = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComment(data));
};

const displayComment = (comments) => {
  //1. get the container
  console.log(comments);
  const commentContainer = document.getElementById("comment-container");
  commentContainer.innerHTML = "";
};

loadcomment();
