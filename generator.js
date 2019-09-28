module.exports = function(n) {
  // generate an array of length n with numerals 0 - (n-1)
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }

  // Fisher-Yates-style
  let placeholder, unshuffledElementIndex;
  while (n) {
    // pick an unshuffled element
    unshuffledElementIndex = Math.floor(Math.random() * n--);
    // and swap it with the current element
    placeholder = array[n];
    array[n] = array[unshuffledElementIndex];
    array[unshuffledElementIndex] = placeholder;
  }
  return array;
};
