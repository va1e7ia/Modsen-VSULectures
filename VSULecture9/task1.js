function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 3, 2, 4, 5));

// Напишите функцию sum, которая принимает любое количество чисел и
// возвращает их сумму, используя объект arguments.
