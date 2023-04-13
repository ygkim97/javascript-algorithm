// set 객체 사용
function solution1(n) {
  let mySet = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      mySet.add(i);
      mySet.add(n / i);
    }
  }
  return [...mySet].sort((a, b) => a - b);
}

function solution2(n) {
  let list = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) list.push(i);
  }

  return list;
}

const solution3 = (n) =>
  new Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((el) => n % el === 0);

console.log(solution1(24));
console.log(solution1(29));
