const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    imgUploadEffects.textContent = evt.target.value;
  }
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
};

imgUploadEffects.addEventListener('change', onFilterChange);

export {onFilterChange};
