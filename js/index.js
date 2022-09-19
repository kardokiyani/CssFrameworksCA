//REGISTER USER

const API_BASE_URL = "https://nf-api.onrender.com/api/v1";

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
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
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

// registerUser(registerUrl, userToRegister);

// LOGIN USER

async function loginUser(url, userData) {
  try {
    const postData = {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    const accessToken = json.accessToken;
    localStorage.setItem(`accessToken`, accessToken);
  } catch (error) {
    console.log(error);
  }
}

const userToLogin = {
  email: "test_user_demo@noroff.no",
  password: "silver123",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

// loginUser(loginUrl, userToLogin);

// REQUEST WITH TOKEN

async function doFetch(url, method = `GET`) {
  try {
    console.log(url);
    const token = localStorage.getItem(`accessToken`);
    console.log(token);
    const fetchOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ${token}",
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

doFetch(postsUrl);
