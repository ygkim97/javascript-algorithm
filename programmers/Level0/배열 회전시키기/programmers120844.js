// unshift(), push(), shift(), pop() 사용
function solution1(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}

// 구조 분해 할당 사용
const solution2 = (numbers, direction) =>
  direction === "right"
    ? [numbers.at(-1), ...numbers.slice(0, -1)]
    : [...numbers.slice(1), numbers.at(0)];

console.log(solution1([1, 2, 3], "right"));
console.log(solution1([4, 455, 6, 4, -1, 45, 6], "left"));
