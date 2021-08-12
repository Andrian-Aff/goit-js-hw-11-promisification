// Напиши функцию `delay(ms)`, которая возвращает промис, переходящий в состояние
// `"resolved"` через `ms` миллисекунд. Значением исполнившегося промиса должно
// быть то кол-во миллисекунд которое передали во время вызова функции `delay`.

const delay = time => {
  // Твой код
};

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      /*
       * Если какое-то условие выполняется, то есть все хорошо,
       * вызываем resolve и получает данные. Условие зависит от задачи.
       */
      resolve('Data passed into resolve function :)');
  
      // Если что-то не так, вызываем reject и передаем ошибку
      // reject("Error passed into reject function :(")
    }, time);
  });
  
  promise.then(
    logger()
  );
  
const logger = time => console.log(`Resolved after ${time}ms`);


console.log(promise(delay(2000).then(logger)));
// Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms