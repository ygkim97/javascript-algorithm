// includes() 사용
const solution1 = (str1, str2) => (str1.includes(str2) ? 1 : 2);

// split() 사용
const solution2 = (str1, str2) => (str1.split(str2).length > 1 ? 1 : 2);

// indexOf() 사용
const solution3 = (str1, str2) => (str1.indexOf(str2) > 0 ? 1 : 2);

console.log(solution1("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution1("ppprrrogrammers", "pppp"));
console.log(solution1("AbcAbcA", "AAA"));
