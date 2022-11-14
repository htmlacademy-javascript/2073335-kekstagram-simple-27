const thumbnailsTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesListElement = document.querySelector('.pictures');
const thumbnailsListFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach(({url, likes, comments}) => {
    const renderThumbnails = thumbnailsTemplate.cloneNode(true);

    renderThumbnails.querySelector('.picture__img').src = url;
    renderThumbnails.querySelector('.picture__likes').textContent = likes;
    renderThumbnails.querySelector('.picture__comments').textContent = comments;
    thumbnailsListFragment.appendChild(renderThumbnails);
  });
  picturesListElement.appendChild(thumbnailsListFragment);
};

export {renderPhotos};
