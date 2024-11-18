function removeKeys(obj, keys) {
  for (let key of Object.keys(obj)) {
    if (keys.includes(key)) {
      delete obj[key];
    }
  }
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ["a", "c"]);
console.log(obj); // { b: 2, d: 4 }

// Напишите функцию, которая удаляет свойства из объекта по
// заданному массиву ключей. Используйте Object.keys() для проверки наличия ключей и удаления их через delete.
