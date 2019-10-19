array1 = [1, 3, 5, 6, 5, 5];
console.log(array1.length);
for (let index = 0; index < array1.length; index += 1) {
  if (array1[index] >= array1[index + 1]) array1.splice(index + 1, 1);
}
console.log(array1);
console.log(array1.length);
