// RENDER POSTS

export function renderPosts(postsToRender) {
  const postContent = document.querySelector(".postContent");

  postContent.innerHTML = "";

  postsToRender.forEach(function (post) {
    postContent.innerHTML += `<a class="card-content-action" href="post-specific.html?id=${post.id}">
    <div class="cardStyle">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text created">${post.created}</p>
      <p class="card-text id">${post.id}</p>
    </div>
  </a>`;
  });
}
