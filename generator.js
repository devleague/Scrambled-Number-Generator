module.exports = function(n) {
  // generate an array of length n with numerals 0 - (n-1)
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }

  // pluck out random elements and put them into a new array
  let result = [];
  while (array.length > 0) {
    result.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return result;
};
