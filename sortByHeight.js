const sortByHeight = (arr) => {
  const sort = arr.filter((h) => h > 0).sort((a, b) => a - b);
  return arr.map((p) => {
    if (p !== -1) {
      return sort.shift();
    }
    return -1;
  });
};


function sortByHeight1(ar) {
  const filtered = ar.filter((val) => val !== -1);
  const sorted = filtered.sort((a, b) => a - b);
  return ar.map((val) => (val === -1 ? -1 : sorted.shift()));
}

const arr = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1];
console.log(sortByHeight1(arr));
