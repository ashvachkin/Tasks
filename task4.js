const fib = (n) => {
  const fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    let item = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(item);
  }
  return fibArr;
};
console.log(fib(10));
