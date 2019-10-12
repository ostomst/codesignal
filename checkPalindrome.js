function checkPalindrome(inputString) {
  for (let index = 0; index < Math.trunc(inputString.length / 2); index += 1) {
    if (inputString[index] !== inputString[inputString.length - index - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome('aaaaaaa'));
