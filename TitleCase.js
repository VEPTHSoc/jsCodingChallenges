function titleCase(str) {
  var titled = str
    .toLowerCase()
    .split(" ")
    .map((elem) => {
      return elem[0].toUpperCase() + elem.slice(1);
    });
  return titled.join(" ");
}

console.log(titleCase("ffffffffffffff fffffffffffff"));
