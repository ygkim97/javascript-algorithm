const solution1 = (my_string) =>
  [...my_string]
    .filter((el) => !isNaN(el))
    .map((el) => Number(el))
    .sort((a, b) => a - b);

// 정규표현식 사용 - 숫자 제외한 나머지 제거
const solution2 = (my_string) =>
  Array.from(my_string.replace(/[^\d]/g, ""))
    .map((el) => +el)
    .sort((a, b) => a - b);

console.log(solution1("hi12392"));
console.log(solution1("p2o4i8gj2"));
console.log(solution1("abcde0"));
