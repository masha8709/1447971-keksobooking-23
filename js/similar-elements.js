import { arrayOfObj } from './create-data.js';
import { arrayOfAvatars } from './create-data.js';

const createElement = function() {
  const templateArticle = document.querySelector('#card').content.querySelector('article');

  const similarArticles = arrayOfObj;
  const similarAuthotors = arrayOfAvatars;

  similarAuthotors.forEach((author) => {
    const avatarEl = templateArticle.cloneNode(true);
    avatarEl.querySelector('.popup__avatar').src = author.avatar;
  });

  similarArticles.forEach((offer) => {
    const articleEl = templateArticle.cloneNode(true);
    articleEl.querySelector('.popup__title').textContent = offer.title;
    articleEl.querySelector('.popup__text--address').textContent = offer.adress;
    articleEl.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    switch (offer.type) {
      case 'flat':
        offer.type = 'квартира';
        break;
      case 'bungalow':
        offer.type = 'Бунгало';
        break;
      case 'house':
        offer.type = 'Дом';
        break;
      case 'palace':
        offer.type = 'Дворец';
        break;
      case 'hotel':
        offer.type = 'Отель';
        break;
    }
    articleEl.querySelector('.popup__type').textContent = offer.type;

    articleEl.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    articleEl.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    const featureListElement = templateArticle.querySelector('.popup__features');
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];

      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });

    articleEl.querySelector('.popup__description').textContent = offer.description;
    articleEl.querySelector('.popup__photo').src = offer.photos;
    document.querySelector('#map-canvas').insertAdjacentElement('beforeend', articleEl);
  });
};

export { createElement};
