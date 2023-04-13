const solution1 = (order) =>
  order
    .toString()
    .split("")
    .filter((el) => +el !== 0 && +el % 3 === 0).length;

const solution2 = (order) => order.toString().split(/[369]/).length - 1;

const solution3 = (order) => [...order.toString().matchAll(/[369]/g)].length;

const solution4 = (order) => order.toString().replace(/[^369]/g, "").length;

// set 객체 사용
// 간단한 검색시, match 보다는 Set구조를 사용하는 것이 더 간결하고 효율적
function solution5(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split("")
    .filter((num) => mySet.has(Number(num))).length;
}

console.log(solution1(3));
console.log(solution5(29423));
