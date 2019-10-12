function makeArrayConsecutive2(statues) {
  let count = 0;
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  for (let i = min; i < max; i += 1) {
    if (!statues.includes(i)) {
      count += 1;
    }
  }
  return count;
}

const statues = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(statues));
