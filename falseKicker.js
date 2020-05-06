function bouncer(arr) {
  var truthies = [];
  for (var elem of arr) {
    if (elem) truthies.push(elem);
  }
  return truthies;
}

console.log(bouncer([7, "ate", "", false, 9]));
