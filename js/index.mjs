// JS -> INDEX

import { createPost } from "./createPost.mjs";

import { updatePost } from "./updatePost.mjs";

// import { removePost } from "./deletePost.mjs";

// import * as post from "./api/posts/index.mjs";

const API_BASE_URL = "https://nf-api.onrender.com";

const content = document.querySelector(".postContent");

async function noroffDELETE(url, id) {
  try {
    const request = {
      method: "DELETE",
      headers: getHeader(),
    };
    const apiResponse = await fetch(API_BASE_URL + url + id, request);
    return apiResponse;
  } catch (error) {}
  return null;
}

async function deleteSocialPost(id) {
  if (!id) {
    return null;
  }
  if (typeof id === "number") {
    let apiResponse = await noroffDELETE(API_SOCIAL_POST, id);
    const json = await apiResponse.json();
    console.log(apiResponse.status);
    return {
      json: json,
      statusCode: apiResponse.status,
    };
  }
  return null;
}

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
// Delete post:
async function deletePost(id) {
  if (id) {
    const result = await deleteSocialPost(id);
    if (result.statusCode === 200) {
      refreshPosts();
    }
  }
}
window.deletePost = deletePost;
    for (let i = 0; i < results.length; i++) {
      const post = results[i];
      content.innerHTML += `<a class="card-content-action" href="post-specific.html?id=${results[i].id}">
      <div class="cardStyle">
      <h5 class="card-title">${results[i].title}</h5>
      <p class="card-text created">${results[i].created}</p>
      <p class="card-text id">${results[i].id}</p>
      </div>
      </a><button type="button" class="btn btn-primary btn-sm mt-3" onclick="deletePost(${results[i].id})">
      Delete
      </button>`;
    }
  } catch (error) {
    console.error(error);
  }
}

getPostContent();



//createPost({
// title: "Hello world! Im just chilling?",
// body: "This is just a example post!",
// tags: "Hello, world, chilling",
//});

//updatePost({
//id: 644,
//title: "Example Post UPDATED",
//body: "Also an example UPDATED",
//});

// removePost(644);

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// post.getPosts().then(console.log);

// post.getPosts(640).then(console.log);
