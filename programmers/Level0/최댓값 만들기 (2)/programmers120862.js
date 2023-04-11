function solution(numbers) {
  numbers.sort((a, b) => a - b);

  return Math.max(
    numbers.at(0) * numbers.at(1),
    numbers.at(-1) * numbers.at(-2)
  );
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
