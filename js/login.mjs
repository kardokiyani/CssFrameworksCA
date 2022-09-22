// LOGIN USER

import {validateEmail, checkLength} from "./validation.mjs"

const API_BASE_URL = "https://nf-api.onrender.com";

const loginForm = document.querySelector("#form");

const email = document.querySelector("#exampleInputEmail1");

const password = document.querySelector("#exampleInputPassword1");

async function loginUser(url) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
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
  const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
}

loginForm.addEventListener("submit", validation);

function validateLogin(submission){
  submission.preventDefault();
  if(everything is true){
   loginUser()
   }

   if (validateEmail(exampleInputEmail1.value) === true) {
    emailError.style.display = "none";
  }else {
    emailError.style.display = "flex";
  }
  
  if (checkLength(exampleInputPassword1.value,9) === true) {
    passwordError.style.display = "none";
  }else {
    passwordError.style.display = "flex";
  }
}