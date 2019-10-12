function centuryFromYear(params) {
  if (params % 100 === 0) {
    return params / 100;
  }
  return Math.trunc(params / 100);
}

console.log(centuryFromYear(2019));
