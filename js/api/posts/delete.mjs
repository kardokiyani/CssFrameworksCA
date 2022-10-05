import { API_BASE_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const updatePostsUrl = `${API_BASE_URL}${action}/${id}`;

  const response = await authFetch(updatePostsUrl, {
    method,
  });

  return await response.json();
}
