// sort() 사용
function solution1(sides) {
  const [a, b, c] = sides.sort((a, b) => a - b);
  return a + b > c ? 1 : 2;
}

// Math.max() 사용
function solution2(sides) {
  const max = Math.max(...sides);
  const sum = sides.reduce((acc, cur) => acc + cur, 0);

  return sum - max > max ? 1 : 2;
}

console.log(solution2([1, 2, 3]));
console.log(solution2([3, 6, 2]));
console.log(solution2([199, 72, 222]));
