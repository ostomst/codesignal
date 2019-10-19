function sortByHeight(a) {
  const heightWithoutTree = a.filter((number) => number > 0);
  const sortWithoutTree = heightWithoutTree.sort((element1, element2) => element1 - element2);
  let position = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== -1) {
      a[i] = sortWithoutTree[position];
      position += 1;
    }
  }
  return [...a];
}

const a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
console.log(sortByHeight(a));
