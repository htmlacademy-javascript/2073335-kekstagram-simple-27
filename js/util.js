import { closeWindowEdit } from './modal.js';
const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');


const successWindow = successTemplate.cloneNode(true);
const errorWindow = errorTemplate.cloneNode(true);

const getRandomPositiveInteger = (a, b) => {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';

const closeSuccess = () => {
  successWindow.remove();
  closeWindowEdit();
};

const onClickBeyondModalSuccess = (evt) => {
  if(evt.target.matches('.success')) {
    closeSuccess();
    removeEventListener('click', onClickBeyondModalSuccess);
  }
};

const escCloseSuccess = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccess();
  }
};

const showSuccess = () => {
  document.body.append(successWindow);

  const successButton = document.querySelector('.success__button');

  document.addEventListener('click', onClickBeyondModalSuccess);
  document.addEventListener('keydown', escCloseSuccess);
  successButton.addEventListener('click', closeSuccess);
};

const onClickBeyondModalError = (evt) => {
  if(evt.target.matches('.error')) {
    closeError();
    removeEventListener('click', onClickBeyondModalError);
  }
};

const escCloseError = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeError();
    document.body = '';
  }
};

const showError = () => {

  document.body.append(errorWindow);

  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', closeError);

  document.addEventListener('keydown', escCloseError);
  document.addEventListener('click', onClickBeyondModalError);
};

function closeError() {
  errorWindow.remove();
}

export {getRandomPositiveInteger, getRandomElement, isEscapeKey, showError, showSuccess, showAlert};
