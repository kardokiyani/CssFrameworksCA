//REGISTER USER

import {validateEmail, checkTheLength, registerUser} from "./validation.mjs"

const API_BASE_URL = "https://nf-api.onrender.com";

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

/**
 * API call that registers the user
 * @param {string} url
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */
async function registerTheUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: text.value,
        email: email.value,
        password: password.value,
        newPassword: newPassword.value,
      }),
    };
    const response = await fetch(url, postData);
    // console.log(response);
    const json = await response.json();
    // console.log(json);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", registerTheUser(registerUrl));

// const userToRegister = {
 // name: "kardo_kiyani",
 // email: "kardo_kiyani@stud.noroff.no",
 // password: "kardokiyani1998",
// };

// registerTheUser(registerUrl);