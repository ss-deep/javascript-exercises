const ftoc = function(temp) {
//°C = 5/9(°F – 32)
  return Number((5/9*(temp-32)).toFixed(1));
};

const ctof = function(temp) {
//°F = 9/5°C + 32
  return Number((9/5*temp+32).toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
