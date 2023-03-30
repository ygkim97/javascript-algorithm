// reduce() 사용
const solution1 = (my_string, n) =>
  [...my_string].reduce((acc, cur) => acc + cur.repeat(n), "");

// map() 사용
const solution2 = (my_string, n) =>
  Array.from(my_string)
    .map((el) => el.repeat(n))
    .join("");

// for of 사용
function solution3(my_string, n) {
  let str = "";

  for (let s of my_string) {
    str += s.repeat(n);
  }

  return str;
}

console.log(solution1("hello", 3));
