function isLucky(n) {
  let currentNumber = n;
  const listDigits = [];// push tuy y
  while (currentNumber !== 0) {
    listDigits.push(currentNumber % 10);
    currentNumber = Math.floor(currentNumber / 10);
  }
  if (listDigits.length % 2 === 1) return false;
  let sumFirstHalf = 0;
  let sumSecondHalf = 0;
  const half = Math.floor(listDigits.length / 2);
  for (let i = 0; i < half; i += 1) {
    sumFirstHalf += listDigits[listDigits.length - i - 1];
    sumSecondHalf += listDigits[i];
  }
  if (sumSecondHalf === sumFirstHalf) return true;
  return false;
}
const n = 1515;
console.log(isLucky(n));
