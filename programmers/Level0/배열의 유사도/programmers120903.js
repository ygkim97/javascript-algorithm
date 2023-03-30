// includes() 사용
const solution1 = (s1, s2) => s1.filter((el) => s2.includes(el)).length;

// set 객체 사용
const solution2 = (s1, s2) =>
  [...s1, ...s2].length - Array.from(new Set([...s1, ...s2])).length;

console.log(solution1(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution1(["n", "omg"], ["m", "dot"]));
