//Написать функцию, которая принимает массив целых чисел и строку, которая может иметь одно из трёх значений: ‘ASC’, ’DESC’, ‘NOT SORT’.
//Функция должна сортировать массив числе и возвращать его. Если строковый параметр равен ‘ASC’, то сортировать в порядке возрастания, если - ’DESC’, то в порядке убывания.
//В остальных случаях возвращать отсортированный массив.

const arr = [1232, 3, 5, 6, 11, 223, 411, 31, 2, 3];
const sortArr = (arr, option) => {
  switch (option) {
    case "ASC":
      let sortUp = arr.sort((a, b) => a - b);
      return sortUp;

    case "DESC":
      let sortDown = arr.sort((a, b) => b - a);
      return sortDown;
      
    default:
      return arr;
  }
};
console.log(sortArr(arr, "ASC"));
