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


// problem - 11
var parrotTrouble = function(talking, hour) {
  if (talking && (hour < 7 || hour > 20)) {
    return true;
  }
  return false;
};

// problem - 12
var makes10 = function(a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  }
  return false;
};

// problem - 13
var nearHundred = function(n) {
  if ((n >= 90 && n <= 110) || (n >= 190 && n <= 210)) {
    return true;
  }
  return false;
};

// problem -14 
var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  }
  return false;
};

// problem - 15
var notString = function(str) {
  if (str.startsWith("not")) {
    return str;
  }
  return "not " + str;
};

// problem -16
var compareTriplets = function(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
};

// problem -17
var aVeryBigSum = function(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }

  return sum;
};

// problem - 18
var staircase = function(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result = result + " ".repeat(n - i) + "#".repeat(i);

    if (i < n) {
      result = result + "\n";
    }
  }

  return result;
};

// problem -19
var gradingStudents = function(grades) {
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade < 38) {
      result.push(grade);
    } else if (5 - (grade % 5) < 3 && grade % 5 !== 0) {
      result.push(grade + (5 - (grade % 5)));
    } else {
      result.push(grade);
    }
  }

  return result;
};

// problem - 20
var timeConversion = function(s) {
  let hour = Number(s.slice(0, 2));
  let period = s.slice(-2);

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour = hour + 12;
  }

  let result = String(hour).padStart(2, "0") + s.slice(2, 8);

  return result;
};

// problem -21 
var repeatStr = function(n, s) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result = result + s;
  }

  return result;
};

// problem - 22
var solution = function(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
};

// problem - 23
var positiveSum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
};

// problem - 24
var summation = function(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
};

// problem - 25
var booleanToString = function(b) {
  if (b === true) {
    return "true";
  }
  return "false";
};