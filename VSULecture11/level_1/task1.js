const Vehicle = {
  type: "transport",
  move() {
    console.log(`${this.type} is moving!`);
  },
};

const Car = Object.create(Vehicle);

Car.type = "car";
Car.move = function () {
  console.log(`${this.type} is driving!`);
};

Vehicle.move();
Car.move();
