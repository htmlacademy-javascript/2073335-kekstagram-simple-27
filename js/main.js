import { createPhotos } from './data.js';
import { renderPhotos } from './render-thumbnail.js';
import { clickOnUploadFile, closeWindowEdit } from './form.js';
import { onValidationForm } from './validation-form.js';

renderPhotos(createPhotos(25));
clickOnUploadFile();
onValidationForm();
closeWindowEdit();
