// Взяла основу функции с MDN

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new getRandomIntInclusive('Неверно указан диапазон', 'Неверно указан диапазон');
  }
}

getRandomIntInclusive(1, 5);

//Основу функции взяла с https://myrusakov.ru/js-random-numbers.html

function getRandomFloat(min, max, floatPoint) {
  min = min.toFixed(floatPoint);
  max = max.toFixed(floatPoint);
}

getRandomFloat(11.87665, 101.454545, 3);

// function getRandomFloat(min, max, floatPoint) {
//   min = min.toFixed(floatPoint);
//   max = max.toFixed(floatPoint);
//   if (min >= 0 && max > min) {
//     return Math.random() * (max - min + 1) + min;
//   } else {
//     throw new getRandomFloat('Неверно указан диапазон', 'Неверно указан диапазон');
//   }
// }
// getRandomFloat(11.87665, 101.454545, 3);
