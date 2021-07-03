import { getRandomIntInclusive, getRandomFloat, getRandomItem, getListElements} from './util.js';
import { getAvatar} from './create-data.js';

const accomodation = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeCheck = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const arrayOfFhoto = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const lat = getRandomFloat(35.65000, 35.70000);
const lng = getRandomFloat(139.70000, 139.80000);

const author = {
  avatar: getAvatar(),
};

const offer = {
  title: 'Очень хорошее предложение',
  address: `${lat} ${lng}`,
  price: getRandomIntInclusive(0, 1000000),
  type: getRandomItem(accomodation),
  rooms: getRandomIntInclusive(1, 3),
  guests: getRandomIntInclusive(1, 3),
  checkin: getRandomItem(timeCheck),
  checkout: getRandomItem(timeCheck),
  features: getListElements(features, 2),
  description: 'Очень красивое помещение',
  photos: getListElements(arrayOfFhoto, 1),
  location: {
    lat: lat,
    lng: lng,
  },
};

export { author, offer};
export { features};
