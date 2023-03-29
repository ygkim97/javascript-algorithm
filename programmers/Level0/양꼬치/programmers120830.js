function solution1(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}

// 틸트(Tilt) 문법 사용
// ~~ 연산자 == Math.trunc
function solution2(n, k) {
  return n * 12000 + (k - ~~(n / 10)) * 2000;
}

console.log(solution2(10, 3));
console.log(solution2(64, 6));
