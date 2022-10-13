// JS -> INDEX

// import { createPost } from "./createPost.mjs";

import deletePost from "./deletePost.mjs";

const API_BASE_URL = "https://nf-api.onrender.com";

const content = document.querySelector(".postContent");

async function getPostContent() {
  const getPostContentUrl = `${API_BASE_URL}/api/v1/social/posts`;

  const token = localStorage.getItem("accessToken");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(getPostContentUrl, options);
    const results = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      //const post = results[i]; Hvis du skal ha denne, endre results[i] nedenfor til post
      content.innerHTML += `
      <a class="card-content-action" href="post-specific.html?id=${results[i].id}">
        <div class="cardStyle">
          <h5 class="card-title">${results[i].title}</h5>
          <p class="card-text created">${results[i].created}</p>
          <p class="card-text id">${results[i].id}</p>
        </div>
      </a>
      
      <button type="button" id="delete" data-delete="${results[i].id}" class="btn btn-primary btn-sm mt-3">
        Delete
      </button>
      <a href="update_post.html?id="${results[i].id}" class="btn btn-primary btn-sm mt-3">
        Update Post
      </a>`;

      const deleteButtons = document.querySelectorAll("#delete");
      deleteButtons.forEach((button) => {
        button.addEventListener("click", deletePost);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

getPostContent();

import { displayMessage } from "./ui/displayMessage.mjs";
import { renderPosts } from "./ui/renderPosts.mjs";
import { searchPosts } from "./ui/searchPosts.mjs";

const url = `https://nf-api.onrender.com/api/v1/social/posts`;

async function getPostsInSearch() {
  const token = localStorage.getItem("accessToken");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(url, options);
    const posts = await response.json();

    console.log(posts);

    renderPosts(posts);
    searchPosts(posts);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".posts-container");
  }
}

getPostsInSearch();
