// 유클리드 호제법 사용 - 최대공약수(GCD)
const gcd_fn = (a, b) => (a % b === 0 ? b : gcd_fn(b, a % b));

function solution1(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const gcd = gcd_fn(numer, denom);

  return [numer / gcd, denom / gcd];
}

// 유클리드 호제법 사용 - 최소공배수(LCM)
const lcm_fn = (a, b) => (a * b) / gcd_fn(a, b);

function solution2(numer1, denom1, numer2, denom2) {
  const lcm = lcm_fn(denom1, denom2);
  return [(lcm / denom1) * numer1 + (lcm / denom2) * numer2, lcm];
}

console.log(solution1(1, 2, 3, 4));
console.log(solution1(9, 2, 1, 3));
