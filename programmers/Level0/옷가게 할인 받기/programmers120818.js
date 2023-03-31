// 삼항연산자 사용
function solution1(price) {
  let discountRate =
    price >= 500000 ? 20 : price >= 300000 ? 10 : price >= 100000 ? 5 : 0;

  return Math.floor(price - (price * discountRate) / 100);
}

// for문 사용
function solution2(price) {
  const discounts = [
    [500000, 20],
    [300000, 10],
    [100000, 5],
  ];

  for (const discount of discounts) {
    if (price >= discount.at(0))
      return Math.floor(price - (price * discount.at(1)) / 100);
  }

  return price;
}

console.log(solution1(150000));
console.log(solution1(580000));
