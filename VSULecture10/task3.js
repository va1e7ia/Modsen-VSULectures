const initArr = [1, 4, 16, 36, 64];

const squareRoot = (el) => Math.sqrt(el);

const res = (arr, func) => arr.map((el) => func(el));

console.log(initArr);
console.log(res(initArr, squareRoot));

// Создайте свою функцию, которая принимает 2 параметра(у меня вычисление квадратного корня):
//  1 - одномерный массив
// 2 - функцию для изменения элементов массива
// !!! Условие: изначальный массив, переданный в функцию не должен быть изменен!
