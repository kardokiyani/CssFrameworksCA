export function registerUser() {
  submission.preventDefault();

  if (checkTheLength(text.value, 5) === true) {
    textError.style.display = "none";
  } else {
    textError.style.display = "block";
  }

  if (checkTheLength(email.value, 5) === true) {
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