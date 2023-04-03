function solution(hp) {
  return [5, 3, 1]
    .reduce(
      (acc, cur) => {
        acc[0] += Math.floor(acc.at(1) / cur);
        acc[1] %= cur;
        return acc;
      },
      [0, hp]
    )
    .at(0);
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
