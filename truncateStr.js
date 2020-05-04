function truncateString(str, num) {
  if (num <= 3) return str.slice(0, num + "...");
  else
  return str.slice(0, num-3)+ "...";
}

console.log(truncateString("as ss s s s s s  ", 100));
