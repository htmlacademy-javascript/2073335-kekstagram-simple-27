import {getRandomPositiveInteger, getRandomElement,} from './util.js';

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

const createPhoto = (id,) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0,200)
});

const createPhotos = () => Array.from({length: PEOPLE_COUNT}, (id, index) => createPhoto(index + 1));

export {createPhotos};
