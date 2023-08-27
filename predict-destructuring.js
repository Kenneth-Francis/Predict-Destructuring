// Problem 1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar]
// SyntaxError: const [, otherRandomCar] missing initializer
console.log(randomCar)
console.log(otherRandomCar);


// Problem 2.
const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla'
}
const {name: otherName} = employee;
// ReferenceError: name variable never declared
console.log(name);
console.log(otherName);


// Problem 3.
const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet'
}
const password = '12345';
const {password: hashedPassword} = person;
// logs the password string '12345', then the hashedPassword value of undefined
// (because the person object) does not have a 'password' property
console.log(password);
console.log(hashedPassword);


// Problem 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
// logs False (2 != 5), then logs True (2 == 2)
console.log(first == second);
console.log(first == third);


// Problem 5.
const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [, willThisWork] = secondKey;
// logs the string 'value', then the array [1, 5, 1, 8, 3, 3]
// then the first element of the array: 1
// then the second element of the array: 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);