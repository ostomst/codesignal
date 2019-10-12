// function adjacentElementsProduct(inputArray) {
//   const max = 1;
//   let x;
//   let y;
//   for (let i = 0; i < inputArray.length; i += 1) {
//     const curentMulti = inputArray[i] * inputArray[i + 1];

//     // if (max < curentMulti) {
//     //   max = curentMulti;
//     //   x = inputArray[i];
//     //   y = inputArray[i + 1];
//     // }
//   }
//   return [max, x, y];
// }
// const inputArray = [3, 6, -2, -5, 7, 3];
// console.log(adjacentElementsProduct(inputArray));

function adjacentElementsProduct(inputArray) {
  const max = [];
  for (let i = 0; i < inputArray.length - 1; i += 1) {
    const curentMulti = inputArray[i] * inputArray[i + 1];
    max.push(curentMulti);
  }
  return Math.max(...max);
}
const inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));
