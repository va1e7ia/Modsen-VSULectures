// const obj = {
//   name: "Object",
//   getName: function () {
//     return this.name;
//   },
// };
// const getName = obj.getName;
// console.log(getName());

// будет выведено undefined

const obj = {
  name: "Object",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName.call(obj, "name"));
