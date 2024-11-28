function Pet(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function () {
    return `Name: ${this.name}, age: ${this.age}`;
  };
  this.isOld = function () {
    if (this.age > 10) {
      return true;
    } else {
      return false;
    }
  };
}

Pet.compareAges = function (pet1, pet2) {
  if (pet1.age > pet2.age) {
    return `${pet1.name} is elder than ${pet2.name}!`;
  } else {
    return `${pet2.name} is elder ${pet1.name}!`;
  }
};

function Dog(name, age, breed) {
  Pet.call(this, name, age);
  this.breed = breed;
}

Dog.prototype.describe = function () {
  return `Name: ${this.name}, age: ${this.age}, breed: ${this.breed}`;
};

Dog.prototype.bark = function () {
  return `${this.name} is barking!`;
};

Dog.prototype.fetch = function (item) {
  return `${this.name} fetches ${item}.`;
};

// function GuardDog(name, age, breed, trainingLevel) {
//   Dog.call(this, name, age, breed);
//   this.trainingLevel = trainingLevel;
//   this.guard = function () {
//     return `${this.name} guards territory at the ${this.trainingLevel} level`;
//   };
//   if (trainingLevel > 5) {
//     this.bark = function () {
//       return `${this.name} is barking loud!`;
//     };
//   }
// }

const cat = new Pet("Luna", 2);
console.log(cat.name);
console.log(cat.age);
console.log(cat.describe());
console.log("Old?: " + cat.isOld());

console.log("*****************************************");

const dog = new Dog("Rex", 12, "Labrador");
console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);
console.log(dog.describe());
console.log("Old?: " + dog.isOld());
console.log(dog.bark());
console.log(dog.fetch("toy"));

console.log("*****************************************");

// const guardDog = new GuardDog("Muhtar", 11, "Terrier", 6);
// console.log(guardDog.name);
// console.log(guardDog.age);
// console.log(guardDog.breed);
// console.log(guardDog.trainingLevel);
// console.log(guardDog.describe());
// console.log("Old?: " + guardDog.isOld());
// console.log(guardDog.bark());
// console.log(guardDog.guard());
// console.log(guardDog.fetch("bone"));

console.log("*****************************************");

// console.log(Pet.compareAges(dog, guardDog));
