const PEOPLE_COUNT = 25;


const DESCRIPTION = [
  'Разве жизнь не прекрасна?',
  'Дома',
  'Просто красиво',
  'Сегодня был классный день!',
  'И зачем все это',
  'Размышляю',
  'Ухожу в реальную жизнь, всем пока!',
  '100 лайков и опубликую новое фото',
  'Всем спасибо за внимание!',
];
//Функция, передающая случайное число из переданного диапазона

const getRandomPositiveInteger = (a, b) => {

  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createNumberPool = (min, max) => {
  if (min < max) {
    const pool = new Set();
    return () => {
      if (pool.size >= max - min) {

        throw Error('pool size exceeded');
      }
      let val = getRandomPositiveInteger(min, max);
      while (pool.has(val)) {
        val = getRandomPositiveInteger(min, max);
      }

      return val;
    };
  }
};
const numberPoolUrl = createNumberPool(1,25);
//функция на проверку длины строки
const checkLineLength = (line, maxLength) => line.length <= maxLength;

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhoto = (id) => ({
  id,
  url: `photos/$${numberPoolUrl()}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0,200)
});

const createPhotos = () => Array.from({length: PEOPLE_COUNT}, (id, index) => createPhoto(index + 1));

checkLineLength(20,40);
console.log(createPhotos());


