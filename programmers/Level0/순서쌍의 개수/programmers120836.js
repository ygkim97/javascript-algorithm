// 메소드 체이닝으로 작성한것 보다 for문으로 작성한게 테스트 실행속도가 더 빠름
const solution1 = (n) =>
  new Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((el) => n % el === 0).length;

function solution2(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) cnt++;
  }
  return cnt;
}

console.log(solution1(20));
console.log(solution1(100));
