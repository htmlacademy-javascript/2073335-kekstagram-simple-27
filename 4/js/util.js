//Функция, передающая случайное число из переданного диапазона, без повторений
const getRandomPositiveInteger = (a, b) => {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// чтобы не использовать рекурсию
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

export {getRandomPositiveInteger, getRandomElement, createNumberPool};
