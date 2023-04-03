// isNaN() 사용
const solution1 = (my_string) =>
  [...my_string].reduce(
    (acc, cur) => (isNaN(cur) ? acc : acc + Number(cur)),
    0
  );

// 정규표현식 및 단항 연산자 사용
const solution2 = (my_string) =>
  Array.from(my_string.replace(/[^0-9]/g, "")).reduce(
    (acc, cur) => acc + +cur,
    0
  );

console.log(solution1("aAb1B2cC34oOp"));
console.log(solution1("1a2b3c4d123"));
