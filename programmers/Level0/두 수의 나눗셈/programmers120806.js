// Math.floor 사용
const solution1 = (num1, num2) => Math.floor((num1 / num2) * 1000);

// Math.trunc 사용
const solution2 = (num1, num2) => Math.trunc((num1 / num2) * 1000);

// parseInt 사용
const solution3 = (num1, num2) => parseInt((num1 / num2) * 1000);

console.log(solution1(3, 2));
console.log(solution1(7, 3));
console.log(solution1(1, 16));
