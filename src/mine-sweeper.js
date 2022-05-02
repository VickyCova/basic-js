const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  matrix.forEach((item, i, arrTwo) => {
    if (item.indexOf(true) !== -1) {
      arr.push(i);
      arr.push(item.indexOf(true));
    }
  });

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (Math.abs(arr[0] - arr[2]) + Math.abs(arr[1] - arr[3]) !== 2) matrix[j][i] = 0;
      if (j == arr[0] && i == arr[1]) (arr[1] < arr[3]) ? matrix[j][i + 1] = 2 : matrix[j][Math.abs(i - 1)] = 2;
      if (j == arr[2] && i == arr[3]) (arr[1] < arr[3]) ? matrix[j][Math.abs(i - 1)] = 2 : matrix[j][i + 1] = 2;
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] !== 2 && matrix[j][i] !== 0) matrix[j][i] = 1;
    }
  }

  return matrix;
}

module.exports = {
  minesweeper
};
