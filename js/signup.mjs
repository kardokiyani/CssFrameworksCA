//REGISTER USER

const API_BASE_URL = "https://nf-api.onrender.com";

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
  name: "test_user_demo",
  email: "test_demo@noroff.no",
  password: "silver123",
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);

