/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number > -1) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const str1 = String(a);
  const str2 = String(b);
  const str3 = String(c);
  let maximum = -100;
  if (Number(str1) > maximum) {
    maximum = Number(str1);
  }

  if (Number(str2) > maximum) {
    maximum = Number(str2);
  }
  if (Number(str3) > maximum) {
    maximum = Number(str3);
  }
  return maximum;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (queen.x === queen.y && king.x === king.y) return true;
  if (queen.x === king.y - 1 && queen.y === king.x + 1) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let smallSum = 0;
  let integer = 0;
  if (a === 0 || b === 0 || c === 0) return false;
  if (a === b) {
    smallSum = a + b;
    integer = c;
  }
  if (b === c) {
    smallSum = c + b;
    integer = a;
  }
  if (a === c) {
    smallSum = a + c;
    integer = b;
  }
  if ((a === b || a === c || c === b) && smallSum > integer) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanianObj = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num < 10) {
    return romanianObj[num];
  }
  if (num > 9 && num < 20) {
    return `${romanianObj[10]}${romanianObj[num % 10]}`;
  }
  if (num > 19 && num < 30) {
    return `${romanianObj[10]}${romanianObj[10]}${romanianObj[num % 10]}`;
  }
  return `${romanianObj[10]}${romanianObj[10]}${romanianObj[10]}${
    romanianObj[num % 10]
  }`;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };
  let finalStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (finalStr.length) {
      case 0:
        finalStr += `${obj[numberStr[i]]}`;
        break;
      default:
        finalStr += ` ${obj[numberStr[i]]}`;
        break;
    }
  }
  return finalStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let integer = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - integer]) {
      return false;
    }
    integer += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number > 0) {
    const check = number % 10;
    if (check === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (!arr.length) {
    return -1;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let q = arr.length - 1; q > i; q -= 1) {
      rightSum += arr[q];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let copySize = size;
  let index = 0;
  let number = 1;
  while (copySize > 0) {
    const array = [];
    for (let i = 0; i < size; i += 1) {
      array[i] = 0;
    }
    arr[index] = array;
    index += 1;
    copySize -= 1;
  }
  let startColumn = 0;
  let endColumn = size;
  let startRow = 0;
  let endRow = size;
  while (startColumn < endColumn && startRow < endRow) {
    for (let i = startColumn; i < endColumn; i += 1) {
      arr[startColumn][i] = number;
      number += 1;
    }
    startRow += 1;
    for (let i = startRow; i < endColumn; i += 1) {
      arr[i][endColumn - 1] = number;
      number += 1;
    }
    endColumn -= 1;
    for (let i = endColumn - 1; i >= startColumn; i -= 1) {
      arr[endColumn][i] = number;
      number += 1;
    }
    endRow -= 1;
    for (let i = endRow - 1; i >= startRow; i -= 1) {
      arr[i][startColumn] = number;
      number += 1;
    }
    startColumn += 1;
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = [];
  const resultMatrix = matrix;
  for (let i = 0; i < matrix.length; i += 1) {
    const array = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      array[j] = matrix[i][j];
    }
    newMatrix[i] = array;
  }
  let length = matrix.length - 1;
  for (let i = 0; i < newMatrix.length; i += 1) {
    for (let j = 0; j < newMatrix.length; j += 1) {
      resultMatrix[j][length] = newMatrix[i][j];
    }
    length -= 1;
  }
  return matrix;
}
/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    const currentItem = newArr[i];
    let index = i;
    while (index !== 0 && newArr[index - 1] > currentItem) {
      newArr[index] = newArr[index - 1];
      index -= 1;
    }
    newArr[index] = currentItem;
  }
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const number = iterations;
  let counter = 0;
  let newString = str;
  let evenStr = '';
  let oddStr = '';
  for (let j = 0; j < number; j += 1) {
    for (let i = 0; i < newString.length; i += 2) {
      evenStr += newString[i];
      oddStr += newString[i + 1];
    }
    newString = evenStr + oddStr;
    evenStr = '';
    oddStr = '';
    counter += 1;
    if (newString === str) {
      return shuffleChar(newString, iterations % counter);
    }
  }
  return newString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(`${number}`, Number);
  let num = 0;
  let numI = 0;
  let big = 0;
  for (let i = arr.length; i >= 0; i -= 1) {
    if (arr[i - 1] < arr[i]) {
      num = arr[i - 1];
      numI = i - 1;
      break;
    }
  }
  const rightArr = [];
  for (let i = numI + 1; i < arr.length; i += 1) {
    rightArr.push(arr[i]);
  }
  rightArr.sort((a, b) => a - b);
  for (let i = 0; i < rightArr.length; i += 1) {
    if (rightArr[i] > num) {
      big = rightArr[i];
      break;
    }
  }
  let temp;
  for (let i = arr.length; i > 0; i -= 1) {
    if (big === arr[i]) {
      temp = i;
      break;
    }
  }
  arr[numI] = big;
  arr[temp] = num;
  const chunk = arr.splice(numI + 1).sort((a, b) => a - b);
  return Number(arr.join('') + chunk.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
