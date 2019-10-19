function matrixElementsSum(matrix) {
  let sumValue = 0;
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (i === 0) sumValue += matrix[i][j];
      else if (matrix[i - 1][j] !== (und0) sumValue += matrix[i][j];
    }
  }
  return sumValue;
}
matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(matrixElementsSum(matrix));
