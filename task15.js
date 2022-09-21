//Написать функцию, принимающую на вход массив чисел, функцию фильтрации и функцию преобразования, которая фильтрует массив, преобразует данные, а затем выводит их.



const arr = [1, 2, 3, 4, 5];
const filter = (el) => el % 2 == 0;
const trasform = (el) => el * 2;

const result = (arr, filter, trasform) => {
  filteredArr = [];

  arr.forEach((item) => {
    if (filter(item)) {
      filteredArr.push(item);
    }
  });

  filteredArr.forEach((item) => console.log(trasform(item)));
};
result(arr, filter, trasform);
