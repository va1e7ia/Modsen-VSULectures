class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // getName() {
  //   return this.#name;
  // }

  // getAge() {
  //   return this.#age;
  // }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

const person = new Person("Me", 19);
// console.log(person.getName());
// console.log(person.getAge());
console.log(person.name);
console.log(person.age);
