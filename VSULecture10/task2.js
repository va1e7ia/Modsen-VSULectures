function* arrayIterator(arr) {
  for (let el of arr) {
    yield el;
  }
}

const gen = arrayIterator(["apple", "banana", "cherry"]);
console.log(gen.next().value); // 'apple'
console.log(gen.next().value); // 'banana'
console.log(gen.next().value); // 'cherry'
console.log(gen.next().done); // true

// Создайте генератор arrayIterator, который принимает массив и возвращает его элементы по одному на каждой итерации.
