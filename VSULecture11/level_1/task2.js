function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, my name is ${this.name}, i'm ${this.age} years old`);
  };
}

const lera = new Person("Lera", 19);
const roma = new Person("Roma", 20);

lera.greet();
roma.greet();
