function longestWord(str) {
  var longest = "";
  let words = str.split(" ");
  for (var word of words) {
    if (word.length > longest.length);
    longest = word;
  }
  let arr = [longest, longest.length]
    return  arr;
}

console.log(longestWord("dfakldfa ahfdkhadh klasjfldajfld"));
