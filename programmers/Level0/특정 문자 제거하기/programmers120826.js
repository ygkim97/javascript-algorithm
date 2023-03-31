// replaceAll() 사용
const solution1 = (my_string, letter) => my_string.replaceAll(letter, "");

// split() 사용
const solution2 = (my_string, letter) => my_string.split(letter).join("");

// filter() 사용
const solution3 = (my_string, letter) =>
  [...my_string].filter((el) => el !== letter).join("");

console.log(solution1("abcdef", "f"));
console.log(solution1("BCBdbe", "B"));
