// reverse() 사용
const solution1 = (num_list) => num_list.reverse();

// for문 사용
function solution2(num_list) {
  let answer = [];

  for (let i = 1; i <= num_list.length; i++) {
    answer.push(num_list[num_list.length - i]);
  }

  return answer;
}

function solution3(num_list) {
  let answer = [];
  const len = num_list.length;

  for (let i = 0; i < len; i++) {
    answer.push(num_list.pop());
  }

  return answer;
}

console.log(solution2([1, 2, 3, 4, 5]));
console.log(solution2([1, 1, 1, 1, 1, 2]));
console.log(solution2([5, 3, 1, 1, 1, 0, 1]));
