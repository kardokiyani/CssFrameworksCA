import { API_BASE_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostsUrl = API_BASE_URL + "social/posts";

  const response = await authFetch(createPostsUrl, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
