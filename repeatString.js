function repeatStringNumTImes(str, num) {
  if (num < 0) return "";
  return str.repeat(num);
}

console.log(repeatStringNumTImes("dddd ", 6));
