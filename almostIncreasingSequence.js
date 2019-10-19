
function almostIncreasingSequence(seq) {
  let count = 0;
  for (let i = 0; i < seq.length - 1; i += 1) {
    if (seq[i] >= seq[i + 1]) count += 1;
    if (count > 1) return false;
    if (seq[i] >= seq[i + 2] && seq[i - 1] >= seq[i + 1]) return false;
  }
  return true;
}
