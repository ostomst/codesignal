function isLucky(n) {
  const nString = n.toString();
  if (nString.length % 2 === 1) return false;
  console.log(nString);

  let sumFirstHalf = 0;
  let sumSecondHalf = 0;
  const half = Math.floor(nString.length / 2);
  for (let i = 0; i < half; i += 1) {
    // eslint-disable-next-line radix
    sumFirstHalf += parseInt(nString[nString.length - i - 1]);
    // eslint-disable-next-line radix
    sumSecondHalf += parseInt(nString[i]);
    console.log(sumFirstHalf);
    console.log(sumSecondHalf);
  }
  if (sumSecondHalf === sumFirstHalf) return true;
  return false;
}
const n = 134008;
console.log(isLucky(n));
