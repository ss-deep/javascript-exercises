const removeFromArray = function(arr1, ...arr2) {
  let finalArr = arr1.filter((ele) => !arr2.includes(ele));
  return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
