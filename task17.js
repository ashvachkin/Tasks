//В функцию подается несколько массивов. Вернуть один массив со всеми элементами.

const arr = []
const subArr1 = [1,2,3]
const subArr2 = [4,5,6]
const concatArr = (...subArrays) => {
    
    subArrays.forEach( (item)=> console.log([...item]))
}
console.log(concatArr(subArr1,subArr2));