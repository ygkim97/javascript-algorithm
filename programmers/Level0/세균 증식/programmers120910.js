const solution1 = (n, t) => n * Math.pow(2, t);

// 비트 연산자 사용
const solution2 = (n, t) => n << t;

console.log(solution2(2, 10));
console.log(solution2(7, 15));
