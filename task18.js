//Написать функцию, принимающую на вход ФИО в виде одной строки. 
//Функция должна возвращать объект вида { first_name: “Имя”, last_name: “Фамилия”, patronymic_name: “Отчество”}

const userName = "Иванов Пётр Андреевич";
const split = (name) => {
  let splited = name.split(" ");
  let splitedName = {
    first_name: splited[1],
    last_name: splited[0],
    patronymic_name: splited[2],
  };
  console.log(splitedName);
};

split(userName);
