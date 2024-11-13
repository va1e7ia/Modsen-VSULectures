// class Bird {
//     fly() {
//         console.log("Птица летит");
//     }
//  }
//  class Duck extends Bird { }
//  class Penguin extends Bird {
//     fly() {
//         throw new Error("Пингвины не умеют летать");
//     }
//  }
//  // Использование
//  const birds = [new Duck(), new Penguin()];
//  birds.forEach(bird => bird.fly());

// НАРУШЕН LISKOV SUBSTITUTION, т.к. дочерний класс Пингвин меняет метод fly, а 
// принцип Барбары Лисков заключается в том, что дочерние классы не должны менять 
// суть родительского класса
// Для того, чтобы это исправить, можно вынести fly() в другой класс и уже от него 
// наследоваться к тем птицам, которые умеют летать
 
class Bird{
    feathers(){
        console.log("У меня есть перья!");
    }
}

class FlyingBird extends Bird{
    fly(){
        console.log("Я могу летать");
    }
}

class Duck extends FlyingBird{};

class Penguin extends Bird{};

const birds = [new Duck(), new Penguin()];

birds.forEach(bird => {
    if(bird instanceof FlyingBird){
        bird.fly();
    }else console.log("Я не умею летать!")
});
