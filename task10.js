const trascations = [
  { from: "Ivan", to: "Oleg", amount: 2500 },
  { from: "Ivan", to: "Igor", amount: 2000 },
  { from: "Oleg", to: "Igor", amount: 1500 },
];

const findMid = (arr) => {
  const newArr = [];
  let mid = 0;
  arr.map((item) => {
    mid += item.amount;
  });
  mid /= arr.length;
  arr.forEach((item) => {
    const newItem = {
      from: item.from,
      to: item.to,
      amount: item.amount,
      diff: item.amount - mid,
    };
    newArr.push(newItem);
  });
  return newArr;
};

console.log(findMid(trascations));
