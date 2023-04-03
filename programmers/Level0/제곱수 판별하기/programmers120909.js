function solution1(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

// Number.isInteger() 사용
function solution2(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution1(144));
console.log(solution1(976));
