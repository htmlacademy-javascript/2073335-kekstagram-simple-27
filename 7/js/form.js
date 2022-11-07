import { isEscapeKey } from './util.js';
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const bodyElement = document.body;

const clickOnUploadFile = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    uploadFile.value = '';
  });

};

const closeWindowEdit = () => {
  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');


  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      imgUploadOverlay.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
    }
  });
};

export {clickOnUploadFile, closeWindowEdit};
