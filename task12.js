const table = [];

for (let i = 1; i <= 10; i++) {
  const subArr = [];
  for (let j = 1 + (i - 1) * 10; j <= i * 10; j++) {
    subArr.push(j * j);
  }
  table.push(subArr);
}

console.log(table);

