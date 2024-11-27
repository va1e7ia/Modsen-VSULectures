const Vehicle = {
  speed: 70,
  move() {
    console.log(`Transport moves ${this.speed} km per hour `);
  },
};

const Car = Object.create(Vehicle);

Car.fuelLevel = 15;
Car.refuel = function () {
  return this.fuelLevel + 1;
};

const myCar = Object.create(Car);

console.log(myCar.speed);
myCar.move();
console.log(myCar.fuelLevel);
console.log(myCar.refuel());
