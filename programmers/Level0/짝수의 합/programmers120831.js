// 메소드 체이닝 사용
function solution1(n) {
  return new Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((el) => el % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}

function solution2(n) {
  return [...new Array(Math.floor(n / 2))]
    .map((_, i) => (i + 1) * 2)
    .reduce((acc, cur) => acc + cur, 0);
}

// 수열 공식 사용
// 수열공식으로 짝수의 합 구하기 = n(n+1), n은 짝수의 개수
// 수열공식으로 홀수의 합 구하기 = n², n은 홀수의 개수
function solution3(n) {
  const count = Math.floor(n / 2);
  return count * (count + 1);
}

// for문 사용
function solution4(n) {
  let sum = 0;

  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }

  return sum;
}

console.log(solution1(10));
console.log(solution1(4));
