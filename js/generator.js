module.exports = generate;

function generate(num) {
//array is a certain length; and unique
  var numArray = [];


  if (typeof num === 'number') {
    //gave me a sequential array; filled empty array
    //Ask Jesse, 'num -1' and 'i--' is to make sure numbers do not exceed length value?
    for (var i = num - 1; i >= 0; i--) {
    numArray.push(i);
    }
    while (i) {
    i = Math.floor(Math.random() * num--);
    //confirm: splice(0, 1)[0]) is taking the new array with random number, gutting it starting at beginning, removing one by one and filling with new array? Why [0], for beginning?
    numArray.push(numArray.splice(0, 1)[0]);

    }
    console.log(numArray);
    return numArray;
    }

    else {
      return numArray;
    }
}



