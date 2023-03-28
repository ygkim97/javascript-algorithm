// if문 사용
function solution1(angle) {
  if (0 < angle && angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (90 < angle && angle < 180) return 3;
  else if (angle === 180) return 4;
}

// 삼항연산자 사용
function solution2(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// filter 사용
function solution3(angle) {
  return [0, 90, 91, 180].filter((el) => el <= angle).length;
}

// switch 사용
function solution4(angle) {
  switch (angle) {
    case 90:
      return 2;
    case 180:
      return 4;
    default:
      return 0 < angle && angle < 90 ? 1 : 3;
  }
}

console.log(solution1(70));
console.log(solution1(91));
console.log(solution1(180));
