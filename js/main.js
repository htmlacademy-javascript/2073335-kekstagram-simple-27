import { clickOnUploadFile, closeWindowEdit } from './modal.js';
import { setUserFormSubmit } from './form.js';
import { resetPhoto } from './edit-photo.js';
import './filter.js';
import './api.js';
import {showSuccess } from './util.js';
import { getData } from './api.js';
import { renderPhotos } from './render-thumbnail.js';

getData((picture) => {
  renderPhotos(picture);
});

setUserFormSubmit(showSuccess);
clickOnUploadFile();
resetPhoto();
closeWindowEdit();
