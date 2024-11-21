function sum() {
  return [...arguments].reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));

// Напишите функцию sum, которая принимает любое количество чисел и
// возвращает их сумму, используя объект arguments.
