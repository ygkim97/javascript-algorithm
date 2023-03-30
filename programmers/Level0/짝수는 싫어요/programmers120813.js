// map() 사용
const solution1 = (n) =>
  new Array(Math.ceil(n / 2)).fill().map((_, i) => i * 2 + 1);

// map(), filter() 사용
const solution2 = (n) =>
  [...new Array(n)]
    .fill()
    .map((_, i) => i + 1)
    .filter((el) => el % 2 !== 0);

console.log(solution1(10));
console.log(solution1(15));
