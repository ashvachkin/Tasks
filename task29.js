//Имеется объект {

//  id: 123,

//  first_name: ‘Ivan’,

//  last_name: ‘Ivanov’,

//  password: ’new password’,

//  age: 15

// }

// Используя деструктуризацию, создать новые переменные firstName, lastName, заполнив их значениями из first_name, last_name объектов.

const user = {
  id: 123,
  first_name: "Ivan",
  last_name: "Ivanov",
  password: "new password",
  age: 15,
};

const userProp = (user) => {
  let firstName = { ...user }.first_name;
  let lastName = { ...user }.last_name;
  console.log(firstName, lastName);
};

userProp(user);
