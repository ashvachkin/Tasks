//Имеется массив с финансовыми переводами вида: [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...]. Вычислить среднюю сумму всех переводов и рассчитать для каждого объекта отклонение от среднего и записать в поле diff. 
//Например, при средней сумме перевода в 2000 отклонение для перевода { from: ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 1000;

const trascations = [
  { from: "Ivan", to: "Oleg", amount: 2500 },
  { from: "Ivan", to: "Igor", amount: 2000 },
  { from: "Oleg", to: "Igor", amount: 1500 },
];

const findMid = (arr) => {
  const newArr = [];
  let mid = 0;
  arr.forEach((item) => {
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
