import { resetEffets } from './filter.js';
import { isEscapeKey } from './util.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const bodyElement = document.body;

const onPressEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindowEdit();
  }
};

const clickOnUploadFile = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    bodyElement.classList.add('modal-open');

    uploadCancel.addEventListener('click', closeWindowEdit);
    document.addEventListener('keydown', onPressEsc);
  });
};

function closeWindowEdit() {
  imgUploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetEffets();
  uploadFile.value = '';
  imgUploadOverlay.value = '';
}

export {clickOnUploadFile, closeWindowEdit};
