const solution1 = (my_string) =>
  [...my_string]
    .filter((el) => !["a", "e", "i", "o", "u"].includes(el))
    .join("");

// 정규표현식 사용
const solution2 = (my_string) => my_string.replace(/[aeiou]/g, "");

console.log(solution1("bus"));
console.log(solution1("nice to meet you"));
