class Shape {
  static count = 0;
  #name;

  constructor(name) {
    this.#name = name;
    Shape.count++;
  }

  getArea() {
    return `Тут должен быть переопределенный метод)`;
  }

  static getCount() {
    return Shape.count;
  }

  getName() {
    return this.#name;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle("Прямоугольник", 5, 10);
console.log(rectangle.name);
console.log(`${rectangle.getName()} имеет площадь: ${rectangle.getArea()}`);

const circle = new Circle("Круг", 3);
console.log(`${circle.getName()} имеет площадь: ${circle.getArea()}`);

// Проверка количества объектов
console.log(`Количество созданных фигур: ${Shape.getCount()}`); // Количество созданных фигур: 2
