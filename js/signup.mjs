//REGISTER USER

// import { validateForm } from './validation.mjs';

const API_BASE_URL = "https://nf-api.onrender.com";

const form = document.querySelector("#form");

const text = document.querySelector("#form3Example1c");

const email = document.querySelector("#form3Example3c");

const password = document.querySelector("#form3Example4c");

const newPassword = document.querySelector("#form3Example4cd");

const regUser = (e) => {
  e.preventDefault();

  const emailVal = email.value.trim();
  const textVal = text.value.trim();
  const pwdVal = password.value.trim();
  const newPwdVal = newPassword.value.trim();

  registerTheUser(textVal, emailVal, pwdVal, newPwdVal);
};

async function registerTheUser(text, email, password, newPassword) {
  const url = API_BASE_URL + "/api/v1/social/auth/register";

  const options = {
    method: "POST",
    body: JSON.stringify({
      name: text,
      email: email,
      password: password,
      newPassword: newPassword,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    //if (json.error) {
    // validateForm();
    // }
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", regUser);