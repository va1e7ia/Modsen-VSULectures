function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: "Lera",
};

greet.call(person);
greet.apply(person);

const greetBind = greet.bind(person);
greetBind();

// У вас есть функция greet, которая принимает имя и выводит приветственное
// сообщение. Напишите, как вы могли бы использовать методы call, apply, и bind для вызова этой
// функции с контекстом объекта person.
