function countNumericValues(obj) {
  const numbers = Object.values(obj).filter((el) => typeof el === "number");

  return numbers.length;
}

const digits = {
  one: 1,
  two: "two",
  three: "three",
  four: 4,
  five: 5,
};

console.log(countNumericValues(digits));

// Задача: Напишите функцию countNumericValues(obj),
// которая принимает объект и возвращает количество его свойств, значения которых являются числами.
