const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr = s1.split("")
  let arrTwo = s2.split("")
  let summ = 0;
  const uniq = Array.from(new Set(arr.concat(arrTwo)))

  for (let i=0; i < uniq.length; i++) {
    let repeat1 = arr.filter(el => el === uniq[i]);
    let repeat2 = arrTwo.filter(el => el === uniq[i]);
    const len = Math.min(repeat1.length, repeat2.length)
    summ += len;
  }  
  
  return summ
}

module.exports = {
  getCommonCharacterCount
}; 

//console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); //3


// assert.strictEqual(getCommonCharacterCount('aabcc', 'adcaa'), 3);
// assert.strictEqual(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
// assert.strictEqual(getCommonCharacterCount('abca', 'xyzbac'), 3);
// assert.strictEqual(getCommonCharacterCount('', 'abc'), 0);
// assert.strictEqual(getCommonCharacterCount('a', 'b'), 0); 