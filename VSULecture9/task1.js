function sum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 3, 2, 4, 5));

// Напишите функцию sum, которая принимает любое количество чисел и
// возвращает их сумму, используя объект arguments.
