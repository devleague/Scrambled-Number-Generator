// External libraries

// My libraries

// module exports only works with funcitons
module.exports = generator;

function generator (arrayLength) {

  var numArray = [];
  var randomNumArray = [];
  var splicedValue;
  var numbers;

  if(arrayLength === 0) {
    return numArray;
  } else {
    for (var i = 0; i < arrayLength; i++) {
      numArray.push(i);
    }
    while (numArray.length !== 0) {
      splicedValue = numArray.splice(Math.floor(Math.random() * numArray.length), 1);
      numbers = parseFloat(splicedValue.toString());
      randomNumArray.push(numbers);
    }
    return randomNumArray;
  }
}

generator(5);