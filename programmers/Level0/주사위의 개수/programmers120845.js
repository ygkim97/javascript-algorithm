const solution = (box, n) =>
  box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);

// 구조 분해 할당 사용
function solution(box, n) {
  const [width, length, height] = box;

  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
