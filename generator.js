module.exports = function(n) {
  // do work here
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(arr);
  arr.unshift(0);
  return arr;
};
