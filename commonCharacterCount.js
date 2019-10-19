function commonCharacterCount(s1, s2) {
  for (let i = 0; i < s1.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    console.log('AF', s2);
    s2 = s2.replace(s1[i], '?');
  }
  console.log('AF', s2);

  return s2.replace(/[^?]/g, '');
}

const s1 = 'aabcc';
const s2 = 'adcaa';

console.log(commonCharacterCount(s1, s2));
