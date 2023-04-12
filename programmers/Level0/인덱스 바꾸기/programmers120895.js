function solution1(my_string, num1, num2) {
  let list = [...my_string];

  list[num1] = my_string.charAt(num2);
  list[num2] = my_string.charAt(num1);

  return list.join("");
}

// 구조 분해 할당 사용
function solution2(my_string, num1, num2) {
  let list = [...my_string];

  [list[num1], list[num2]] = [list[num2], [list[num1]]];

  return list.join("");
}

console.log(solution1("hello", 1, 2));
console.log(solution1("I love you", 3, 6));
