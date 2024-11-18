const car = {};

Object.defineProperty(car, "price", {
  //при создании нового свойства также указываем все флаги, для которых true
  value: 1000,
  enumerable: false,
  writable: true,
  configurable: true,
});

for (let key in car) {
  console.log(key); //не перечисляется
}

console.log(Object.keys(car)); //не выводится в списке ключей

console.log(car.price);

delete car.price; // можно удалять
console.log(car.price);

// Создайте объект car и добавьте ему свойство price со значением 10000. Сделайте так, чтобы это свойство:
// Не выводилось в списке ключей (то есть не было перечисляемым).
// Но его можно было изменять и удалять.
