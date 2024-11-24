function createLogger(log) {
  return function (message) {
    console.log(log + message);
  };
}

const errorLog = createLogger("ERROR: ");
errorLog("Пофикси меня!"); // ERROR: Пофикси меня!
const debugLog = createLogger("DEBUG: ");
debugLog("Важная отладочная информация!"); // DEBUG: Важная отладочная информация!

// Создать функцию которая позволит выводить сообщения в консоль для разных уровней логирования.
