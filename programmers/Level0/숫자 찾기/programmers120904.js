// || 연산자, indexOf 사용
const Solution1 = (num, k) => num.toString().indexOf(k) + 1 || -1;

function Solution2(num, k) {
  const index = [...num.toString()].findIndex((el) => el == k);

  return index > -1 ? index + 1 : index;
}

// array.indexOf 와 string.indexOf 차이
function Solution3(num, k) {
  // array.indexOf = 엄격한 비교 수행(===)
  let index = [...num.toString()].indexOf(k.toString());
  // string.indexOf = 암묵적인 비교 수행(==)
  index = num.toString().indexOf(k);

  return index > -1 ? index + 1 : index;
}

console.log(Solution3(29183, 1));
console.log(Solution3(232443, 4));
console.log(Solution3(123456, 7));
