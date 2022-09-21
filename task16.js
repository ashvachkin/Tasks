const num = 88005553535
const changeNum = (num) =>{
 let = num+="";
 const newNum = num[0] + " " + "(" + num.slice(1,4) + ")" + " " + num.slice(4,7) + "-" + num.slice(7,9) + "-" + num.slice(9,11)
 console.log(newNum);
}
changeNum(num)