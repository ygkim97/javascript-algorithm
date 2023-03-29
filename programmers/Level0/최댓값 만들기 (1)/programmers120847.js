// 구조 분해 할당 사용
function solution1(numbers) {
  const [num1, num2] = numbers.sort((a, b) => b - a);
  return num1 * num2;
}

// 메소드 체이닝 사용
function solution2(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, cur) => acc * cur);
}

function solution3(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .splice(0, 2)
    .reduce((acc, cur) => acc * cur);
}

console.log(solution3([1, 2, 3, 4, 5]));
console.log(solution3([0, 31, 24, 10, 1, 9]));
