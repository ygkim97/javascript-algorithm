const solution1 = (numbers) => numbers.map((el) => el * 2);

const solution2 = (numbers) =>
  numbers.reduce((acc, cur, idx) => {
    acc[idx] = cur * 2;
    return acc;
  }, []);

const solution3 = (numbers) =>
  numbers.reduce((acc, cur) => [...acc, cur * 2], []);

console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution1([1, 2, 100, -99, 1, 2, 3]));
