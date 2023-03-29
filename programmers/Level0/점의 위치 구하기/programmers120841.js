// at() 메소드 사용
function solution1(dot) {
  return dot.at(0) > 0 ? (dot.at(1) > 0 ? 1 : 4) : dot.at(1) > 0 ? 2 : 3;
}

// 구조분해 사용
function solution2(dot) {
  const [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

// if문 사용
function solution3(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  else if (x < 0 && y > 0) return 2;
  else if (x < 0 && y < 0) return 3;
  else if (x > 0 && y < 0) return 4;
}

console.log(solution1([2, 4]));
console.log(solution1([-7, 9]));
