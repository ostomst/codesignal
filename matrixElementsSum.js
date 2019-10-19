
function matrixElementsSum(matrix) {
  let total = 0;
  for (let j = 0; j < matrix[0].length; j += 1) {
    for (let i = 0; i < matrix.length; i += 1) {
      if (matrix[i][j] === 0) { break; } else { total += matrix[i][j]; }
    }
  }
  return total;
}
