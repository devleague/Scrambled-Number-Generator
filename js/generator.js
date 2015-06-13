function generate(number) {

  if( typeof number !== 'number') {

    return "Invalid input.";
  }

  if(number === NaN || number === Infinity || number === -Infinity) {

    console.log(number);

    return "Invalid input.";
  }

  var source = [];

  for(var i = 0;i<number;i++) {

    source.push(i);
  }

  var out = [];
  var randomIndex = null;

  while(source.length>0) {

    randomIndex = Math.random()*source.length;

    out.push(source.splice(randomIndex,1));
  }

  return out;
};

module.exports = generate;