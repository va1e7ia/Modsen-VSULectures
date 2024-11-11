let forbiddenWords =  ['spam', 'advertisement', 'scam'];
const message = "This is a spam message";

//some
const includesForbiddenWords = forbiddenWords.some(word => message.includes(word));

//map
const mapForbiddenWords = forbiddenWords.map(word => message.includes(word)).includes(true);

console.log(includesForbiddenWords);

console.log(mapForbiddenWords);

forbiddenWords.shift();

console.log(forbiddenWords);




// Ситуация: Вы разрабатываете систему фильтрации сообщений, и вам нужно проверить, содержит ли сообщение какое-либо из запрещённых слов.​
// Условия:​ Создайте массив forbiddenWords, который будет содержать запрещённые слова: ['spam', 'advertisement', 'scam'].​
// Создайте переменную message, в которой будет храниться текст сообщения, например: "This is a spam message".​
// Используя метод ______, проверьте, содержит ли сообщение хотя бы одно из запрещённых слов.​
// Выведите результат на экран: true, если сообщение содержит запрещённое слово, и false в противном случае.​
// Удалите первую задачу из массива.​
// Выведите все оставшиеся задачи на экран.​



