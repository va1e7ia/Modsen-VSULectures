function combineKeysAndValues(keys, values) {
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
}

const keys = ["one", "two", "three"];
const values = [1, 2, 3];

console.log(combineKeysAndValues(keys, values));

// Задача: Создайте функцию combineKeysAndValues(keys, values), которая
// принимает два массива (один с ключами, второй со значениями) и возвращает объект, где ключи соответствуют своим значениям.
