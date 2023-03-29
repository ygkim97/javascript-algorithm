// filter 사용
function solution1(num_list) {
  let even = num_list.filter((el) => el % 2 === 0);
  return [even.length, num_list.length - even.length];
}

// reduce 사용
const solution2 = (num_list) =>
  num_list.reduce(
    (acc, cur) => {
      acc[cur % 2]++;
      return acc;
    },
    [0, 0]
  );

console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution1([1, 3, 5, 7]));
