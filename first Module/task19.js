//Написать функцию, которая принимает на вход E-mal в виде строки и возвращает объект вида { username, domain }

const email = "ivanov.oleg@pochta.com";
const splitEmail = (email) => {
  let splited = email.split("@");
  let splitedEmail = {
    username: splited[0],
    domain: splited[1],
  };
  return splitedEmail;
};

console.log(splitEmail(email));
