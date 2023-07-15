import "mocha";
import { assert } from "chai";

import {
  helloWorld,
  goodBye,
  isAnagram,
  isEven,
  isLeapYear,
  isOdd,
  isPalindrome,
  isPrime,
  nthFibanoacci,
  removeSpaces,
  removeSpacesAndCapitalize,
} from "../src/index";
import npmPackage from "../src/index";

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });

  it("should have a helloWorld property", () => {
    assert.property(npmPackage, "helloWorld");
  });
});

describe("Hello World Function", () => {
  it("should be a function", () => {
    assert.isFunction(helloWorld);
  });

  it("should return the hello world message", () => {
    const expected = "Hello World from my example modern npm package!";
    const actual = helloWorld();
    assert.equal(actual, expected);
  });
});

describe("Goodbye Function", () => {
  it("should be a function", () => {
    assert.isFunction(goodBye);
  });

  it("should return the goodbye message", () => {
    const expected = "Goodbye from my example modern npm package!";
    const actual = goodBye();
    assert.equal(actual, expected);
  });
});

describe("Remove Spaces Function", () => {
  it("should be a function", () => {
    assert.isFunction(removeSpaces);
  });

  it("should remove spaces from a string", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("Hello World");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with multiple spaces", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("Hello   World");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with leading spaces", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("   Hello World");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with trailing spaces", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("Hello World   ");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with leading and trailing spaces", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("   Hello World   ");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with leading, trailing, and multiple spaces", () => {
    const expected = "HelloWorld";
    const actual = removeSpaces("   Hello   World   ");
    assert.equal(actual, expected);
  });

  it("should handle an empty string", () => {
    const expected = "";
    const actual = removeSpaces("");
    assert.equal(actual, expected);
  });

  it("should handle a string with only spaces", () => {
    const expected = "";
    const actual = removeSpaces("   ");
    assert.equal(actual, expected);
  });
});

describe("Remove Spaces and Capitalize Function", () => {
  it("should be a function", () => {
    assert.isFunction(removeSpacesAndCapitalize);
  });

  it("should remove spaces from a string and capitalize it", () => {
    const expected = "HELLOWORLD";
    const actual = removeSpacesAndCapitalize("Hello World");
    assert.equal(actual, expected);
  });

  it("should remove spaces from a string with multiple spaces and capitalize it", () => {
    const expected = "HELLOWORLD";
    const actual = removeSpacesAndCapitalize("Hello   World");
    assert.equal(actual, expected);
  });
});

describe("Is Prime Function", () => {
  it("should be a function", () => {
    assert.isFunction(isPrime);
  });

  it("should return false for -1", () => {
    const expected = false;
    const actual = isPrime(-1);
    assert.equal(actual, expected);
  });

  it("should return false for 0", () => {
    const expected = false;
    const actual = isPrime(0);
    assert.equal(actual, expected);
  });

  it("should return false for 1", () => {
    const expected = false;
    const actual = isPrime(1);
    assert.equal(actual, expected);
  });

  it("should return true for 2", () => {
    const expected = true;
    const actual = isPrime(2);
    assert.equal(actual, expected);
  });

  it("should return true for 3", () => {
    const expected = true;
    const actual = isPrime(3);
    assert.equal(actual, expected);
  });

  it("should return false for 4", () => {
    const expected = false;
    const actual = isPrime(4);
    assert.equal(actual, expected);
  });
});

describe("Is Even Function", () => {
  it("should be a function", () => {
    assert.isFunction(isEven);
  });

  it("should return true for 0", () => {
    const expected = true;
    const actual = isEven(0);
    assert.equal(actual, expected);
  });

  it("should return true for 2", () => {
    const expected = true;
    const actual = isEven(2);
    assert.equal(actual, expected);
  });

  it("should return true for 4", () => {
    const expected = true;
    const actual = isEven(4);
    assert.equal(actual, expected);
  });

  it("should return false for 1", () => {
    const expected = false;
    const actual = isEven(1);
    assert.equal(actual, expected);
  });

  it("should return false for 3", () => {
    const expected = false;
    const actual = isEven(3);
    assert.equal(actual, expected);
  });

  it("should return false for 5", () => {
    const expected = false;
    const actual = isEven(5);
    assert.equal(actual, expected);
  });

  it("should return false for -1", () => {
    const expected = false;
    const actual = isEven(-1);
    assert.equal(actual, expected);
  });

  it("should return false for -3", () => {
    const expected = false;
    const actual = isEven(-3);
    assert.equal(actual, expected);
  });
});

describe("Is Odd Function", () => {
  it("should be a function", () => {
    assert.isFunction(isOdd);
  });

  it("should return false for 0", () => {
    const expected = false;
    const actual = isOdd(0);
    assert.equal(actual, expected);
  });

  it("should return false for 2", () => {
    const expected = false;
    const actual = isOdd(2);
    assert.equal(actual, expected);
  });

  it("should return false for 4", () => {
    const expected = false;
    const actual = isOdd(4);
    assert.equal(actual, expected);
  });

  it("should return true for 1", () => {
    const expected = true;
    const actual = isOdd(1);
    assert.equal(actual, expected);
  });

  it("should return true for 3", () => {
    const expected = true;
    const actual = isOdd(3);
    assert.equal(actual, expected);
  });

  it("should return true for 5", () => {
    const expected = true;
    const actual = isOdd(5);
    assert.equal(actual, expected);
  });

  it("should return true for -1", () => {
    const expected = true;
    const actual = isOdd(-1);
    assert.equal(actual, expected);
  });

  it("should return true for -3", () => {
    const expected = true;
    const actual = isOdd(-3);
    assert.equal(actual, expected);
  });

  it("should return false for -2", () => {
    const expected = false;
    const actual = isOdd(-2);
    assert.equal(actual, expected);
  });
});

describe("isAnagram function", () => {
  it("should be a function", () => {
    assert.isFunction(isAnagram);
  });

  it('should return true for "hello" and "olleh"', () => {
    const expected = true;
    const actual = isAnagram("hello", "olleh");
    assert.equal(actual, expected);
  });

  it('should return true for "hello" and "hello"', () => {
    const expected = true;
    const actual = isAnagram("hello", "hello");
    assert.equal(actual, expected);
  });

  it('should return false for "hello" and "world"', () => {
    const expected = false;
    const actual = isAnagram("hello", "world");
    assert.equal(actual, expected);
  });

  it('should return false for "hello" and "goodbye"', () => {
    const expected = false;
    const actual = isAnagram("hello", "goodbye");
    assert.equal(actual, expected);
  });

  it('should return true for "hello" and "ohlle"', () => {
    const expected = true;
    const actual = isAnagram("hello", "ohlle");
    assert.equal(actual, expected);
  });

  it('should return true for "hello" and "ohell"', () => {
    const expected = true;
    const actual = isAnagram("hello", "ohell");
    assert.equal(actual, expected);
  });
});

describe("isPalindrome function", () => {
  it("should be a function", () => {
    assert.isFunction(isPalindrome);
  });

  it('should return true for "racecar"', () => {
    const expected = true;
    const actual = isPalindrome("racecar");
    assert.equal(actual, expected);
  });

  it('should return true for "malayalam"', () => {
    const expected = true;
    const actual = isPalindrome("malayalam");
    assert.equal(actual, expected);
  });

  it('should return true for "tacocat"', () => {
    const expected = true;
    const actual = isPalindrome("tacocat");
    assert.equal(actual, expected);
  });

  it('should return false for "hello"', () => {
    const expected = false;
    const actual = isPalindrome("hello");
    assert.equal(actual, expected);
  });

  it('should return false for "world"', () => {
    const expected = false;
    const actual = isPalindrome("world");
    assert.equal(actual, expected);
  });
});

describe("isLeapYear function", () => {
  it("should be a function", () => {
    assert.isFunction(isLeapYear);
  });

  it("should return true for 2000", () => {
    const expected = true;
    const actual = isLeapYear(2000);
    assert.equal(actual, expected);
  });

  it("should return true for 2004", () => {
    const expected = true;
    const actual = isLeapYear(2004);
    assert.equal(actual, expected);
  });

  it("should return true for 2008", () => {
    const expected = true;
    const actual = isLeapYear(2008);
    assert.equal(actual, expected);
  });

  it("should return false for 1900", () => {
    const expected = false;
    const actual = isLeapYear(1900);
    assert.equal(actual, expected);
  });

  it("should return false for 2001", () => {
    const expected = false;
    const actual = isLeapYear(2001);
    assert.equal(actual, expected);
  });

  it("should return false for 2002", () => {
    const expected = false;
    const actual = isLeapYear(2002);
    assert.equal(actual, expected);
  });
});

describe("nthFibanoacci function", () => {
  it("should be a function", () => {
    assert.isFunction(nthFibanoacci);
  });

  it("should return 0 for 0", () => {
    const expected = 0;
    const actual = nthFibanoacci(0);
    assert.equal(actual, expected);
  });

  it("should return 1 for 1", () => {
    const expected = 1;
    const actual = nthFibanoacci(1);
    assert.equal(actual, expected);
  });

  it("should return 1 for 2", () => {
    const expected = 1;
    const actual = nthFibanoacci(2);
    assert.equal(actual, expected);
  });

  it("should return 2 for 3", () => {
    const expected = 2;
    const actual = nthFibanoacci(3);
    assert.equal(actual, expected);
  });

  it("should return 3 for 4", () => {
    const expected = 3;
    const actual = nthFibanoacci(4);
    assert.equal(actual, expected);
  });
});
