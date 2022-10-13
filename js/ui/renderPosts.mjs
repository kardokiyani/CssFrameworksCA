// RENDER POSTS

export function renderPosts(postsToRender) {
  const postsContainer = document.querySelector(".posts-container");
  postsContainer.innerHTML = "";

  postsToRender.forEach(function (posts) {
    postsContainer.innerHTML += `<div class="posts">
                                      <h4>${posts.title}</h4>
                                  </div>`;
  });
}
