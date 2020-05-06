function sumAll(arr) {
  sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10]));
