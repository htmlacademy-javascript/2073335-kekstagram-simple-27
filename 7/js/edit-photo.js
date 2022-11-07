const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const scaleControlValueElement = document.querySelector('.scale__control--value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview');


const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

let defaultScale = DEFAULT_SCALE;

const editPhoto = () => {

  scaleControlSmallerElement.addEventListener('click', () => {
    if (defaultScale > MIN_SCALE) {
      defaultScale -= MIN_SCALE;
      scaleControlValueElement.value = `${defaultScale}%`;
      imgUploadPreviewElement.style.transform = `scale(${defaultScale / 100})`;
    }
  });

  scaleControlBiggerElement.addEventListener('click', () =>{
    if (defaultScale < MAX_SCALE) {
      defaultScale += MIN_SCALE;
      scaleControlValueElement.value = `${defaultScale}%`;
      imgUploadPreviewElement.style.transform = `scale(${defaultScale / 100})`;

    }
  });
};

const settingScaleValue = (value) => {
  scaleControlValueElement.value = `${value}%`;
  imgUploadPreviewElement.style.transform = `scale(${value / 100})`;
};

settingScaleValue(defaultScale);

const resetPhoto = () => {
  defaultScale = MAX_SCALE;
  settingScaleValue(MAX_SCALE);
  imgUploadPreviewElement.style.transform = `scale(${defaultScale / 100})`;
};

editPhoto();

export {resetPhoto};
