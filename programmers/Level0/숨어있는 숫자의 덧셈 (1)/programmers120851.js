const solution1 = (n) =>
  Array.from(n.toString()).reduce((acc, cur) => acc + +cur, 0);

// map으로 형변환
const solution2 = (n) => {
  (n + "")
    .split("")
    .map((el) => +el)
    .reduce((acc, cur) => acc + cur, 0);
};

// while 문 사용
function solution3(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;

    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(solution1(1234));
console.log(solution1(930211));
