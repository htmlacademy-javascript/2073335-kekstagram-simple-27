const imgUploadForm = document.querySelector('#upload-select-image');
const uploadSubmit = document.querySelector('#upload-submit');
const textDescription = document.querySelector('.text__description');
const MIN_LENGTH_TEXT = 20;
const MAX_LENGTH_TEXT = 140;


const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'

});

const validateText = (value) => value.length >= MIN_LENGTH_TEXT && value.length <= MAX_LENGTH_TEXT;

pristine.addValidator(
  imgUploadForm.querySelector('.text__description'),
  validateText,
  'Длина комментария должна быть от 20 до 140 символов'
);

const onFormDisable = () => textDescription.addEventListener('input', () => {
  if (textDescription.value.length >= MIN_LENGTH_TEXT && textDescription.value.length <= MAX_LENGTH_TEXT) {
    uploadSubmit.removeAttribute('disabled');
  }
  else {
    uploadSubmit.setAttribute('disabled', 'disabled');
  }
});
const onValidationForm = () => {
  imgUploadForm.addEventListener('change', (evt) => {
    onFormDisable();
    evt.preventDefault();
    pristine.validate();

  });
};

export {onValidationForm};
