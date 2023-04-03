// reduce() 사용
function solution1(rsp) {
  const win = { 0: 5, 2: 0, 5: 2 };

  return [...rsp].reduce((acc, cur) => acc + win[cur], "");
}

// map() 사용
function solution2(rsp) {
  const win = { 0: 5, 2: 0, 5: 2 };

  return [...rsp].map((el) => win[el]).join("");
}

console.log(solution2("2"));
console.log(solution2("205"));
