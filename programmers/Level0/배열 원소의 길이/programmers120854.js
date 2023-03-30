// map() 사용
const solution1 = (strlist) => strlist.map((el) => el.length);

// reduce() 사용
const solution2 = (strlist) =>
  strlist.reduce((acc, cur, idx) => {
    acc[idx] = cur.length;
    return acc;
  }, []);

const solution3 = (strlist) =>
  strlist.reduce((acc, cur) => [...acc, cur.length], []);

console.log(solution3(["We", "are", "the", "world!"]));
console.log(solution3(["I", "Love", "Programmers."]));
