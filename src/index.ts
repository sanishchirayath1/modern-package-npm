export function helloWorld() {
  const message = "Hello World from my example modern npm package!";
  return message;
}

export function goodBye() {
  const message = "Goodbye from my example modern npm package!";
  return message;
}

export function removeSpaces(string: string) {
  return string.replace(/\s/g, "");
}

export function removeSpacesAndCapitalize(string: string) {
  return string.replace(/\s/g, "").toUpperCase();
}

export function isPrime(number: number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function isEven(number: number) {
  return number % 2 === 0;
}

export function isOdd(number: number) {
  return number % 2 !== 0;
}

export function isPalindrome(string: string) {
  return string === string.split("").reverse().join("");
}

export function isAnagram(string1: string, string2: string) {
  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

export function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function nthFibanoacci(n: number): number {
  if (n <= 1) return n;
  return nthFibanoacci(n - 1) + nthFibanoacci(n - 2);
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function randomIntegerArray(
  min: number,
  max: number,
  length: number
): number[] {
  const array: number[] = [];
  for (let i = 0; i < length; i += 1) {
    array.push(randomInteger(min, max));
  }
  return array;
}

export default {
  helloWorld,
  goodBye,
  removeSpaces,
  removeSpacesAndCapitalize,
  isPrime,
  isEven,
  isOdd,
  isPalindrome,
  isAnagram,
  isLeapYear,
  nthFibanoacci,
  randomInteger,
  randomIntegerArray,
};
