function allLongestStrings(inputArray) {
  let newArray = new Array();
  let maxStringlength = inputArray[0].length;
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i].length > maxStringlength) maxStringlength = inputArray[i].length;
  }
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i].length === maxStringlength) newArray.push(inputArray[i]);
  }
  return newArray;
}
