function reverseInParentheses(inputString) {
  const position = [];
  for (let i = 0; i < inputString.length; i += 1) {
    const indexOfFirst = inputString.indexOf('(');
    inputString = inputString.substr(1, indexOfFirst);
  }
  return inputString;
}
const inputString = 'foo(bar)baz(blim)';
console.log(reverseInParentheses(inputString));
