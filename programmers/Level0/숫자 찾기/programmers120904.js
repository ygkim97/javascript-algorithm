// || 연산자, indexOf 사용
const solution1 = (num, k) => num.toString().indexOf(k) + 1 || -1;

function solution2(num, k) {
  const index = [...num.toString()].findIndex((el) => el == k);

  return index > -1 ? index + 1 : index;
}

// array.indexOf 와 string.indexOf 차이
function solution3(num, k) {
  // array.indexOf = 엄격한 비교 수행(===)
  let index = [...num.toString()].indexOf(k.toString());
  // string.indexOf = 암묵적인 비교 수행(==)
  index = num.toString().indexOf(k);

  return index > -1 ? index + 1 : index;
}

console.log(solution3(29183, 1));
console.log(solution3(232443, 4));
console.log(solution3(123456, 7));
