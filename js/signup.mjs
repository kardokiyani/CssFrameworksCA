//REGISTER USER

const API_BASE_URL = "https://nf-api.onrender.com";

const signupForm = document.querySelector("#form");

signupForm.addEventListener("submit", validateLogin);

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: "kardo_kiyani",
  email: "kardo_kiyani@stud.noroff.no",
  password: "kardokiyani1998",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);

