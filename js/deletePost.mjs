// DELETE

import { API_BASE_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

export { deleteSocialPost };

const action = "/posts";
const method = "delete";

// async function noroffDELETE(url, id) {
//   try {
//     const request = {
//       method: "DELETE",
//       headers: getHeader(),
//     };
//     const apiResponse = await fetch(API_BASE_URL + url + id, request);
//     return apiResponse;
//   } catch (error) {}
//   return null;
// }

// async function deleteSocialPost(id) { 
//   if (!id) {
//       return null;
//   }
//   if (typeof(id) === "number") {
//       let apiResponse = await noroffDELETE(API_SOCIAL_POST, id);
//       const json = await apiResponse.json();
//       console.log(apiResponse.status);
//       return {
//           json: json,
//           statusCode: apiResponse.status
//       };
//   }
//   return null;
// }
