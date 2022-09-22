export function validateEmail(email) {
  const regEx = /^[\w\-.]+@(stud.)?noroff.no$/g;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

export function checkLength(value, len) {
  return value.trim().length > len;
}