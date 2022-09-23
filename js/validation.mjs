// VALIDATION

const form = document.querySelector("#form");

const text = document.querySelector("#form3Example1c");

const textError = document.querySelector("#textError");

const email = document.querySelector("#form3Example3c");

const emailError = document.querySelector("#emailError");

const password = document.querySelector("#form3Example4c");

const passwordError = document.querySelector("#passwordError");

const newPassword = document.querySelector("#form3Example4cd");

const newPasswordError = document.querySelector("#newPasswordError");

export function registerUser(submission) {
  submission.preventDefault();

  if (checkTheLength(text.value, 5) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (checkTheLength(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkTheLength(password.value, 5) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (checkTheLength(newPassword.value, 5) === true) {
    newPasswordError.style.display = "none";
  } else {
    newPasswordError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", registerUser);

export function checkTheLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  const regEx = /^[\w\-.]+@(stud.)?noroff.no$/g;
  const patternMatches = regEx.test(email);
  return patternMatches;
}