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
