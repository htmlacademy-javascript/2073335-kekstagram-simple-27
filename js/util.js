
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
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

const isEscapeKey = (evt) => evt.key === 'Escape';

const showSuccess = () => {
  const successWindow = successTemplate.cloneNode(true);
  document.body.append(successWindow);
  const successButton = document.querySelector('success__button');
  successButton.addEventListener('click', () => {
    showSuccess.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      showSuccess.remove();
      document.body = '';
    }
  });
  window.addEventListener('click', () => {
    showSuccess.remove();
  });
};

const showAlert = () => {
  const errorWindow = errorTemplate.cloneNode(true);
  document.body.append(errorWindow);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorWindow.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorWindow.remove();
    }

  });
};


export {getRandomPositiveInteger, getRandomElement, createNumberPool, isEscapeKey, showAlert, showSuccess};
