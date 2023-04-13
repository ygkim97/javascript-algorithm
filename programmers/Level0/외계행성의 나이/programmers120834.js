function solution1(age) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return Array.from(age.toString())
    .map((el) => alphabet[+el])
    .join("");
}

function solution2(age) {
  const alphabet = "abcdefghij";
  return [...age.toString()].map((el) => alphabet[+el]).join("");
}

// 문자열 인덱스 접근 가능
function solution3(age) {
  return age
    .toString()
    .split("")
    .map((el) => "abcdefghij"[el])
    .join("");
}

console.log(solution2(23));
console.log(solution2(51));
console.log(solution2(100));
