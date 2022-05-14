const { get } = require('lodash');
const obj = require('./index');

const { getFullName } = obj;
const { isPalindrome } = obj;
const { getCircumfrence } = obj;
const { getArea } = obj;

test('Firstname + lastname should return fullname', () => {
  expect(getFullName('Sam', 'James')).toBe('Sam James');
});

test('Check string is palindrome or not', () => {
  expect(isPalindrome('abcba')).toBe(true);
});

test('Check string is palindrome or not', () => {
  expect(isPalindrome('abb')).not.toBe(true);
});

test('Circumference of circle', () => {
  expect(getCircumfrence(1)).toBe(`The circumference is 6.283185307179586`);
});

test('Circumference of circle', () => {
  expect(getCircumfrence(1)).not.toBe(`The circumference is 6`);
});

test('Area of Circle', () => {
  expect(getArea(1)).toBe(`The area is 3.141592653589793`);
});

test('Area of Circle', () => {
  expect(getArea(1)).not.toBe(`The area is 3.141592653793`);
});
