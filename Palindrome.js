function palindrom(str) {
  var regex = /[\W_]/g;
  var smallStr = str.toLowerCase().replace(regex, "");
  var reversed = smallStr.split("").reverse().join("");
  if (reversed === smallStr) return true;
  else return false;
}

console.log(palindrom("toot"));
console.log(palindrom("yeeeeeeeeeees"));
