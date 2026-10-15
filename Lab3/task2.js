const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters[random(characters.length - 1)];
  }
  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));
