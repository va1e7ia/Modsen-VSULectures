const names = ['alice', 'bob', 'charlie', 'david'];

const upperCaseName = names.map(name=>{
    return name[0].toUpperCase()+name.slice(1);
})

console.log(upperCaseName);

// Ситуация: У вас есть массив имен, и вы хотите создать новый массив, в котором каждое имя будет записано в верхнем регистре.​
// Условия:​
// Создайте массив names, который будет содержать следующие имена: ['alice', 'bob', 'charlie', 'david'].​
// Используя метод ______, создайте новый массив upperCaseNames, который будет содержать имена из массива names, преобразованные в верхний регистр.​
// Выведите новый массив upperCaseNames на экран.​
