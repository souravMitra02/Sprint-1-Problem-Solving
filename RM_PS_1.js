// problem - 1
var solveMeFirst = function (a, b) {
  const sum = a + b;
  return sum;
};

solveMeFirst(3, 2);

// problem - 2

var multiply = function (a, b) {
  const multiply = a * b;
  return multiply;
};

multiply(4, 5);

// problem - 3

var evenOrOdd = function (number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

evenOrOdd(8);

// problem - 4
var makeNegative = function (number) {
  if (number < 0) {
    return number;
  } else {
    return number * -1;
  }
};

makeNegative(7);

// problem - 5

var opposite = function (number) {
  const oppositeNumber = number * -1;
  return oppositeNumber;
};

opposite(-6);

// problem - 6

var simpleArraySum = function (ar) {
  let num = 0;
  for (const array of ar) {
    num += array;
  }
  return num;
};

simpleArraySum([1, 2, 3, 4]);

// problem - 7

var sleepIn = function (weekday, vacation) {
  if (weekday !== true || vacation === true) {
    return true;
  } else {
    return false;
  }
};

sleepIn(true, false);

// problem - 8

var monkeyTrouble = function (aSmile, bSmile) {
  if (
    (aSmile === true && bSmile === true) ||
    (aSmile === false && bSmile === false)
  ) {
    return true;
  } else {
    return false;
  }
};

monkeyTrouble(true, true);

// problem - 9

var sumDouble = function (a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
};

sumDouble(3, 3);

// problem - 10

var diff21 = function (n) {
  if (n > 21) {
    return (n - 21) * 2;
  } else {
    return Math.abs(n - 21);
  }
};
diff21(25);
