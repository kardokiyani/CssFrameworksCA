// LOGIN USER

const API_BASE_URL = "https://nf-api.onrender.com";

async function loginUser(url, userData) {
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
    const accessToken = json.accessToken;
    localStorage.setItem('accessToken', accessToken);
  } catch (error) {
    console.log(error);
  }
}

const userToLogin = {
  email: 'test_user_demo@stud.noroff.no',
  password: 'silver123',
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

loginUser(loginUrl, userToLogin);
