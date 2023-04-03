const solution = (cipher, code) =>
  [...cipher].filter((_, i) => (i + 1) % code === 0).join("");

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
