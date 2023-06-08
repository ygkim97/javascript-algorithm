// 합성수란? 1보다 큰 자연수 중에서 소수가 아닌 수

function isComposite(n) {
  if (n === 2) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return true;
  }
  return false;
}

function Solution1(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += Number(isComposite(i));
  }
  return cnt;
}

function Solution2(n) {
  return new Array(n)
    .fill()
    .map((_, i) => isComposite(i + 1))
    .filter((el) => el).length;
}

console.log(Solution1(10));
console.log(Solution1(15));
