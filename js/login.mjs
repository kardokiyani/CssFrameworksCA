// LOGIN USER

const API_BASE_URL = "https://nf-api.onrender.com";

const loginForm = document.querySelector("#form");

const email = document.querySelector("#exampleInputEmail1");

const password = document.querySelector("#exampleInputPassword1");

async function loginUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { email: email.value, password: password.value },
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

function validateLogin(event) {
  event.preventDefault();

  if (validateEmail(email.value, 0) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "flex";
  }

  if (checkLength(password.value, 9) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "flex";
  }

  console.log("hello");
}

loginForm.addEventListener("submit", validateLogin);

const userToLogin = {
  email: "kardo_kiyani@stud.noroff.no",
  password: "kardokiyani1998",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

loginUser(loginUrl, userToLogin);
