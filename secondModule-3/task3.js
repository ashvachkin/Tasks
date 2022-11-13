//На вход подается массив со значениями. Нужно вывести массив уникальных элементов (нет повторений в поданном массиве).

const arr = [1,2,3,1,1,1,1,1,2,3,11231,12312]

const removeDuplicates = (arr) =>{
    let sortedArr = [...new Set(arr)]
    return sortedArr
}
console.log(removeDuplicates(arr));