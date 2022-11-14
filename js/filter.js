const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadForm = document.querySelector('.img-upload__form');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];
const DEFAULT_EFFECT = EFFECTS[0];
let selectedEffect = DEFAULT_EFFECT;

const isDefault = function () {
  return selectedEffect === DEFAULT_EFFECT;
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: selectedEffect.min,
    max: selectedEffect.max,
  },
  start: selectedEffect.max,
  step: selectedEffect.step,
  connect: 'lower',
},
);

const updateSlider = () => {
  effectLevelSlider.classList.remove('hidden');

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });

  if (isDefault()) {
    effectLevelSlider.classList.add('hidden');
    imgUploadPreview.style.filter = '';
    imgUploadPreview.className = '';
  }
};

const resetEffets = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
  imgUploadForm.reset();
  imgUploadForm.value = '';
};

const onFilterChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${selectedEffect.name}`);
  updateSlider();
};

imgUploadForm.addEventListener ('change', onFilterChange);

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  imgUploadPreview.style.filter = `${selectedEffect.filter}(${effectLevelValue.value}${selectedEffect.unit})`;
});

export {resetEffets};
