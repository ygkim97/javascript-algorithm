// reverse() 사용
const solution1 = (my_string) => my_string.split("").reverse().join("");

// spread operator(전개 구문) 사용
const solution2 = (my_string) => [...my_string].reverse().join("");

// 재귀함수 사용
function solution3(my_string) {
  console.log(my_string);
  return my_string === ""
    ? ""
    : solution3(my_string.substring(1)) + my_string.charAt(0);
}

// reduceRight() 사용
const solution4 = (my_string) =>
  Array.from(my_string).reduceRight((a, b) => a + b);

console.log(solution1("jaron"));
console.log(solution1("bread"));
