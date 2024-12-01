class Person {
  _name;

  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }

  setName(newName) {
    return (this._name = newName);
  }
}

class Student extends Person {
  _grade;
  constructor(name, grade) {
    super(name);
    this._grade = grade;
  }

  getGrade() {
    return this._grade;
  }

  setGrade(newGrade) {
    if (newGrade < 1 || newGrade > 5) {
      throw new Error("Оценка должна быть в диапазоне от 1 до 5.");
    }
    this._grade = newGrade;
  }
}

const student = new Student("Лера", 4);
console.log(`Имя: ${student.getName()}`);
console.log(`Оценка: ${student.getGrade()}`);

student.setName("Иван");
student.setGrade(5);
console.log(`Новое имя: ${student.getName()}`);
console.log(`Новая оценка: ${student.getGrade()}`);

student.setName("Лера");
student.setGrade(7);
console.log(`Новое имя: ${student.getName()}`);
console.log(`Новая оценка: ${student.getGrade()}`);
