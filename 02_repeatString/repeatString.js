const repeatString = function(str, n) {
  let repeatedStr= '';
  if(n<0)
    return 'ERROR';
  for (let i=n; i>0; i--) {
    repeatedStr += str;
  }
  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
