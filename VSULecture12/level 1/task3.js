class Animal {
  constructor(name) {
    this.type = name;
  }

  info() {
    return `Hey, I'm ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  info() {
    return `${super.info()}. I can bark!`;
  }
}

let cat = new Animal("Luna");
console.log(cat.info());

let dog = new Dog("Rex");
console.log(dog.info());
