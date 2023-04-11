const solution1 = (my_string) =>
  [...my_string]
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");

// 정규표현식 사용
const solution2 = (my_string) =>
  [...my_string]
    .map((el) => (el.match(/[a-z]/) ? el.toUpperCase() : el.toLowerCase()))
    .join("");

console.log(solution2("cccCCC"));
console.log(solution2("abCdEfghIJ"));
