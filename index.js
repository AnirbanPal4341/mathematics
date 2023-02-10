class Maths {
  // summation of an array of numbers.
  sumArray(numArray = []) {
    return numArray.reduce((a, b) => a + b, 0);
  }
  // summation of numbers.
  sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  // subtraction of numbers.
  subtract(...args) {
    let diff = args[0] * 2;
    for (let arg of args) diff -= arg;
    return diff;
  }
  // multiplication of numbers.
  multiply(...args) {
    let product = 1;
    for (let arg of args) product *= arg;
    return product;
  }
  // division of numbers.
  division(n1, n2 = 1) {
    return n1 / n2;
  }
  // factorial of a number.
  factorial(number) {
    if (number < 0) {
      return undefined;
    } else if (number === 0) {
      return 1;
    } else {
      let fact = 1;
      for (let i = 1; i <= number; i++) {
        fact *= i;
      }
      return fact;
    }
  }
  // if a number is a palindrome.
  isPalindrome(num) {
    var rem,
      temp,
      final = 0;
    var number = Number(num);

    temp = number;
    while (number > 0) {
      rem = number % 10;
      number = parseInt(number / 10);
      final = final * 10 + rem;
    }
    if (final == temp) {
      return true;
    } else {
      return false;
    }
  }
  // if a number is a prime number.
  isPrime(number) {
    let isPrime = true;
    if (number === 1) {
      return undefined;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return true;
      } else {
        return false;
      }
    }
  }
  // calculate nCr.
  combinations(n, r) {
    if (n == r || r == 0) {
      return 1;
    } else {
      r = r < n - r ? n - r : r;
      return product_Range(r + 1, n) / product_Range(1, n - r);
    }
  }
}
function product_Range(a, b) {
  var prd = a,
    i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}
// export class
module.exports = new Maths();
