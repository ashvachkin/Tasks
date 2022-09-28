//Написать функцию, которая принимает на вход объект вида { first_name: ‘Ivan’, last_name: ‘Ivanov’, email: ‘ivanov@pochta.com’ }
// и возвращает строку вида: “Ivanov Ivan E-mail: ivanov@pochta.com”

const obj = {
  first_name: "Ivan",
  last_name: "Ivanov",
  email: "ivanov@pochta.com",
};
const stringFromObj = (obj) => {
  str = `${obj.first_name} ${obj.last_name} E-mail:${obj.email}`;
  console.log(str);
};
stringFromObj(obj);
