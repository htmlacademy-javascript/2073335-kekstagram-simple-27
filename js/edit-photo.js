const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const STEP = 25;
let defaultScale;

const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const scaleControlValueElement = document.querySelector('.scale__control--value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview');

const editPhoto = () => {

  scaleControlSmallerElement.addEventListener('click', () => {
    if (defaultScale > MIN_SCALE) {
      defaultScale -= STEP;
      scaleControlValueElement.value = `${defaultScale}%`;
      imgUploadPreviewElement.style.transform = `scale(${defaultScale / DEFAULT_SCALE})`;
    }
  });

  scaleControlBiggerElement.addEventListener('click', () =>{
    if (defaultScale < MAX_SCALE) {
      defaultScale += STEP;
      scaleControlValueElement.value = `${defaultScale}%`;
      imgUploadPreviewElement.style.transform = `scale(${defaultScale / DEFAULT_SCALE})`;
    }
  });
};
const settingScaleValue = (valueScale) => {
  scaleControlValueElement.value = `${valueScale}%`;
  imgUploadPreviewElement.style.transform = `scale(${valueScale / DEFAULT_SCALE})`;
};

settingScaleValue(defaultScale);

const resetPhoto = () => {
  defaultScale = MAX_SCALE;
  settingScaleValue(MAX_SCALE);
  imgUploadPreviewElement.style.transform = `scale(${defaultScale / DEFAULT_SCALE})`;
};

editPhoto();

export {resetPhoto};
