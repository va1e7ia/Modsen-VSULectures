// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
 
//     getName() {
//         return this.name;
//     }
//     save() {
//        console.log(`Сохранение пользователя ${this.name} в базу данных`);
//     }
//  }
//  // Использование
//  const user = new User("Алексей", 30);

// НАРУШЕН SINGLE RESPONSIBILITY, т.к. класс Пользователь отвечает за создание 
// самого пользователя, получение имени и даже за сохранение его в базе данных
// Чтобы исправить этот код, можно разделить класс Пользователь, сделав отдельный 
// класс для сохранения пользователя в бд

class User {
    constructor(name, age) {
         this.name = name;
         this.age = age;
     }

     getName() {
        return this.name;
    }
}

class saveUser {
    save(user) {
        console.log(`Сохранение пользователя ${this.name} в базу данных`);
     }
}

// Использование
const user = new User("Алексей", 30);
const databaseUser = new SaveUser();
databaseUser.save(user);


 