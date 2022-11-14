import { clickOnUploadFile, closeWindowEdit } from './modal.js';
import { setUserFormSubmit } from './form.js';
import { resetPhoto } from './edit-photo.js';
import './filter.js';
import './api.js';
import { showAlert, showSuccess } from './util.js';
import { getData } from './api.js';
import { renderPhotos } from './render-thumbnail.js';


clickOnUploadFile();
closeWindowEdit();
resetPhoto();

getData((picture) => {
  renderPhotos(picture);
});


setUserFormSubmit(showSuccess, showAlert,);

