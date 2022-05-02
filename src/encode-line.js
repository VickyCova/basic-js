const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = [];
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sum += 1;
    } else {
      const str = sum === 1 ? `${arr[i]}` : `${sum}${arr[i]}`
      result.push(str);
      sum = 1;
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};

console.log(encodeLine("aabbbc")); //'2a3bc')
