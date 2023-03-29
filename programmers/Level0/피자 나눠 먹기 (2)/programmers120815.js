// 유클리드 호제법 사용
function solution1(n) {
  const piece = 6;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return lcm(n, piece) / piece;
}

// while문 사용
function solution2(n) {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }

    piece += 6;
  }

  return piece / 6;
}

function solution3(n) {
  let pizza = 1;

  // 나머지가 0일때 while문을 빠져나옴
  while ((pizza * 6) % n) {
    pizza++;
  }

  return pizza;
}

// 메소드 체이닝 사용
function solution4(n) {
  return (
    new Array(6)
      .fill(n)
      .map((el, i) => el * (i + 1))
      .find((el) => el % 6 === 0) / 6
  );
}

console.log(solution1(6));
console.log(solution1(10));
console.log(solution1(4));
