// UPDATE POST

import { API_BASE_URL } from "./api/constants.mjs";

import { authFetch } from "./api/authFetch.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostsUrl = `${API_BASE_URL}${action}${postData.id}`;

  const response = await authFetch(updatePostsUrl, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}

export async function setUpdateFormListener() {
  const form = document.querySelector("editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      // Send it to the API
      updatePost(post);
    });
  }
}
