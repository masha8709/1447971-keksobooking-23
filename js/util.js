/* eslint-disable id-length */
function getRandomIntInclusive(number1, number2) {
  const lower = Math.ceil(Math.min(Math.abs(number1), Math.abs(number2)));
  const upper = Math.floor(Math.max(Math.abs(number1), Math.abs(number2)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomIntInclusive(1, 5);


function getRandomFloat(number1, number2, digits = 1) {
  const lower = Math.min(Math.abs(number1), Math.abs(number2));
  const upper = Math.max(Math.abs(number1), Math.abs(number2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

getRandomFloat(11.87665, 101.454545, 3);

//даёт одно значение из массива
const getRandomItem = function (array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

//массив случайной длины из значений, значения не повторяются
function getListElements(array, counter) {
  const newArray = [];
  for (let i = 0; i < counter; i++) {
    const newElemIndex = getRandomIntInclusive(0, array.length - 1);
    const newElem = array[newElemIndex];
    let repeatElements = [];
    repeatElements = newArray.filter((item) => {
      if (item === newElem) {
        return item = newElem;
      }
    });
    const thisElemExist = repeatElements.length;

    if (!thisElemExist) {
      newArray.push(newElem);
    }
  }
  return newArray;
}

export { getRandomIntInclusive, getRandomFloat, getRandomItem, getListElements};
