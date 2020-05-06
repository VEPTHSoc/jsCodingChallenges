function destroyer(arr) {
  var args = Array.from(arguments);
  args.splice(0, 1);
  var targets = args;
  let result = [];
  for (var num of arr) {
    if (targets.indexOf(num) === -1) {
      result.push(num);
    }
  }
  return result
}

console.log(destroyer([1, 2, 3], 2, 3, 1));
