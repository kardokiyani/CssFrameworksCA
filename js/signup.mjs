//REGISTER USER

import { validation } from "./validation.mjs";

const API_BASE_URL = "https://nf-api.onrender.com";

const signupForm = document.querySelector("#form");

const text = document.querySelector("#form3Example1c");

const email = document.querySelector("#form3Example3c");

const password = document.querySelector("#form3Example4c");

const newPassword = document.querySelector("#form3Example4cd");

/**
 * API call that registers the user
 * @param {string} url
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */
async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text.value,
        email: email.value,
        password: password.value,
        newPassword: newPassword.value,
      }),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

signupForm.addEventListener("submit", validation);

const userToRegister = {
  name: "kardo_kiyani",
  email: "kardo_kiyani@stud.noroff.no",
  password: "kardokiyani1998",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);
