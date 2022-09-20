const arr = [{ name: "Ivan", age: 24 }, { name: "Oleg", age: 16}, { name: "Igor", age: 24}]

const sumAge = (arr) => {
    let sum = 0;
    arr.forEach((item)=>{
         sum += item.age})
         return sum
}

console.log(sumAge(arr));