var input = [
  "aaa",
  "bbb",
  "ccc",
  "aaa",
  "ccc",
  "ccc",
  "ccc",
  "aaa",
  "aaa",
  "aaa",
  "bbb",
  "bbb",
];
var obj = {};
input.forEach(function (e) {
  if (obj.hasOwnProperty(e)) {
    obj[e]++;
    // console.log(obj);
  } else {
    obj[e] = 1;
    // console.log(obj);
  }
});
console.log(obj);
console.log(Object.keys(obj).sort((a, b) => obj[b] - obj[a])[1]);
