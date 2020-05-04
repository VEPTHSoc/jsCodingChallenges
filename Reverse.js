function reverseString(str) {
  //   return str.split("").reverse().join("");
  let final = "";
  for (let i = str.length - 1; i > -1 ; i--) {
    final += str[i];
  }
  return final;
}

let a = reverseString("hello");

console.log(a);
