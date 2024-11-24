(function () {
  const randNums = [];
  for (let i = 0; i < 5; i++) {
    randNums.push(Math.floor(Math.random() * 20));
  }

  const min = Math.min(...randNums);
  const max = Math.max(...randNums);

  console.log(randNums);
  console.log(min);
  console.log(max);
})();

// Используя IIFE, создайте блок кода, где переменная x доступна только внутри функции. Внутри функции выполните следующую логику:
// Генерируйте массив случайных чисел длиной 5.
// Найдите минимальное и максимальное значение в массиве.
// Выведите массив, минимальное и максимальное значение.