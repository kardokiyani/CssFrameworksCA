// UPDATE POST

// import { API_BASE_URL } from "./api/constants.mjs";

import { authFetch } from "./api/authFetch.mjs";

import { updateUrl } from "./api/constants.mjs";

const form = document.querySelector("#form");

const title = document.querySelector("#titleId");

const body = document.querySelector("#bodyId");

const tags = document.querySelector("#tagsId");


const action = "social/posts/";
const method = "put";

// const url = updateUrl + id

export async function updatePost(postData) {
  const updatePostsUrl = `${updateUrl}${postData.id}`;
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await authFetch(updatePostsUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        title: title,
        body: body,
        tags: tags,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function setUpdateFormListener() {
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
