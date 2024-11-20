function filterEvens() {
  let filteredNums = Array.from(arguments).filter((el) => el % 2 === 0);

  return filteredNums;
}

console.log(filterEvens(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Напишите функцию, которая принимает любое количество чисел и возвращает
// массив, содержащий только чётные числа.
