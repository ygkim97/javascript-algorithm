function Solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}

console.log(Solution("Bcad"));
console.log(Solution("heLLo"));
console.log(Solution("Python"));
