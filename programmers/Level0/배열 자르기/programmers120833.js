// slice() 사용
const solution1 = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

// splice() 사용
const solution2 = (numbers, num1, num2) =>
  numbers.splice(num1, num2 - num1 + 1);

console.log(solution1([1, 2, 3, 4, 5], 1, 3));
console.log(solution1([1, 3, 5], 1, 2));
