function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(string) {
  const arrayValues = string.split('');

  const reverseArrayValues = arrayValues.reverse();

  const reverseString = reverseArrayValues.join('');

  if (string == reverseString) {
    return true;
  } else {
    return false;
  }
}

function getCircumfrence(rad) {
  return `The circumference is ${2 * Math.PI * rad}`;
}

function getArea(rad) {
  return `The area is ${Math.PI * rad * rad}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
