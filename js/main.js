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


const accomodation = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeCheck = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const arrayOfFhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getAvatar = function () {
  let counter = 0;
  let avatar = '';

  for (let i = 1; i <= 10; i++) {
    counter++;

    if (counter < 10) {
      counter = `0${  counter}`;
    }
    avatar = `img/avatars/user${counter}.png`;
  }
  return avatar;
};


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

const author = {
  avatar: getAvatar(),
};

const offer = {
  title: 'Очень хорошее предложение',
  address: '', //Я так  и додумалась, как мне можно получить строку из lat  и lng, которые в location
  price: getRandomIntInclusive(0, 1000000),
  type: getRandomItem(accomodation),
  rooms: getRandomIntInclusive(1, 100),
  guests: getRandomIntInclusive(1, 10),
  checkin: getRandomItem(timeCheck),
  checkOut: getRandomItem(timeCheck),
  features: getListElements(facilities, 2),
  description: 'Очень красивое помещение',
  photos: getListElements(arrayOfFhoto, 1),
  location: {
    lat: getRandomFloat(35.65000, 35.70000),
    lng: getRandomFloat(139.70000, 139.80000),
  },
};

const arrayOfAvatars = [];
for (let i = 1; i <= 10; i++) {
  arrayOfAvatars.push(author);
}

const arrayOfObj = [];
for (let i = 1; i <= 10; i++) {
  arrayOfObj.push(offer);
}
