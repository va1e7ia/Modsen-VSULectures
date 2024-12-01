class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

const person = new Person("Me", 19);
console.log(person.getName());
console.log(person.getAge());
