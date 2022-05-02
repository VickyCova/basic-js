const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let newArr = [];
    
  for (let i in arr) {
   let digitArr = [...arr];
   digitArr.splice(i, 1);
    newArr.push(+digitArr.join(''));
     }

  return newArr.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(342)); //42
