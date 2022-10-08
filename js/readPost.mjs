// READ

import { API_BASE_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostUrl = `${API_BASE_URL}${action}`;

  const response = await authFetch(updatePostUrl);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostUrl = `${API_BASE_URL}${action}/${id}`;

  const response = await authFetch(getPostUrl);

  return await response.json();
}
