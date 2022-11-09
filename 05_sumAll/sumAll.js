const sumAll = function(firstNum, lastNum) {
  
  if(typeof(firstNum) === "number" && typeof(lastNum) === "number" && firstNum > 0 && lastNum > 0) {
    if(lastNum>firstNum)
     return lastNum * (lastNum + 1) / 2;
    else
      return firstNum * (firstNum + 1) / 2;
    }
    else 
      return 'ERROR';
};

// Do not edit below this line 1 2 3 4 5 6 7 8       1 2 3 4 5
module.exports = sumAll;
