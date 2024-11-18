function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const obj = {
  a: 1,
  b: [2, 3],
  c: {
    d: 3,
  },
  e: null,
};

// const copiedObj = JSON.parse(JSON.stringify(obj));

const copiedObj = deepCopy(obj);
console.log(copiedObj);

// Напишите функцию deepCopy(obj), которая выполняет глубокое копирование объекта
//  (включая вложенные объекты). Не используйте библиотечные функции.
