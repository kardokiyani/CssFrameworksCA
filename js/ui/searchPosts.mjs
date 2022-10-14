// SEARCH POSTS

import { renderPosts } from "./renderPosts.mjs";

export function searchPosts(posts) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPosts = posts.filter((post) => {
      if (post.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    renderPosts(filteredPosts);
  };
}