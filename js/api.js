import { resetEffets } from './filter.js';
import { closeWindowEdit } from './modal.js';
import { showAlert, showSuccess } from './util.js';

const GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_DATA)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Не удалось загрузить фотографии пользователей. Попробуйте ещё раз');
    });
};

const sendData = (evt, onSuccess, onFail) => {
  fetch(
    SEND_DATA,
    {
      method: 'POST',
      body: new FormData(evt.target)
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccess();
        closeWindowEdit();
        resetEffets();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};
export {getData, sendData};
