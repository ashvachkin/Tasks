//Написать функцию, принимающую массив A и любое количество числе в виде аргументов и возвращающую массив A, заполненный числами, переданными в аргументе. 
//Например, следующий вызов функции fn([1, 2, 3], 4, 5) вернёт массив [1, 2, 3, 4, 5]

const arr = [1,2,3,4,5]
const concatFunc = (arr,...numbers) =>{
let newArr = arr.concat(...numbers)
console.log(newArr);
}
concatFunc(arr,2,3,4,5,6,7,123)