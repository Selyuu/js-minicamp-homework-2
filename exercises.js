//Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
      return x;
    }
  }


function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
}

function isInRange(num) {
  if (num > 20 && num < 50) {
    return true;
  }
  return false;
}

function isInteger(num) {
  if (num % 1 === 0) {
    return true;
  }
  return false;
}

function fizzBuzz(num) {
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return 'fizzbuzz';
    } else {
      return 'fizz';
    }
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  if (num != Math.round(num)) {
    return false;
  }  

  var isPrime = true;

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  return words.join(' ');
}

function contains(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

function addNumbers(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function averageTestScore(testScores) {
  var result = 0;

  for (var i = 0; i < testScores.length; i++) {
    result += testScores[i];
  }
  return result / testScores.length;
}

function largestNumber(numbers) {
  var result = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
