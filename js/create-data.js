import { author, offer} from './basic-data.js';

function getAvatar() {
  let counter = 0;
  let avatar = '';

  for (let i = 1; i <= 10; i++) {
    counter++;

    if (counter < 10) {
      counter = `0${counter}`;
    }
    avatar = `img/avatars/user${counter}.png`;
  }
  return avatar;
}

export { getAvatar};

const arrayOfAvatars = [];
for (let i = 1; i <= 10; i++) {
  arrayOfAvatars.push(author);
}

const arrayOfObj = [];
for (let i = 1; i <= 10; i++) {
  arrayOfObj.push(offer);
}
