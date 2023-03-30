const solution = (array, height) => array.filter((el) => el > height).length;

console.log(solution([149, 180, 192, 170], 167));
console.log(solution([180, 120, 140], 190));
