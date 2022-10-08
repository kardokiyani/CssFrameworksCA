// CREATE POST

import { API_BASE_URL } from "./api/constants.mjs";

import { authFetch } from "./api/authFetch.mjs";

const form = document.querySelector("#form");

const title = document.querySelector("#titleId");

const body = document.querySelector("#bodyId");

const tags = document.querySelector("#tagsId");

const action = "/posts";
const method = "post";

export async function createPost(title, body, tags) {
  const createPostsUrl = API_BASE_URL + "social/posts";
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await authFetch(createPostsUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        name: title,
        name: body,
        name: tags,
      }),
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    return await json;
  } catch (error) {
    console.error(error);
  }
}

function validateCreateForm(submission) {
  submission.preventDefault();
  if (validateTitle(title.value) === true) {
    titleError.style.display = "none";
  } else {
    titleError.style.display = "block";
  }

  if (validateBody(body.value) === true) {
    bodyError.style.display = "none";
  } else {
    bodyError.style.display = "block";
  }
  if (validateTags(tags.value) === true) {
    tagsError.style.display = "none";
  } else {
    tagsError.style.display = "block";
  }
  if (
    validateTitle(title.value) &&
    validateBody(body.value) &&
    validateTags(tags.value)
  ) {
    createPost(title.value, body.value, tags.value);
  }
}

form.addEventListener("submit", validateCreateForm);

export function createListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Send it to the API
      createThePost(post);
    });
  }
}

const path = location.pathname;

if (path === "./index.html") {
  createListener();
}
