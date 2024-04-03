import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');


function createGalleryItem({ preview, original, description }) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.setAttribute('data-source', original);
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageSrc = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" width="800" height="600">
`)
      instance.show();

  window.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalOnEscape);
    }
  }
}

galleryContainer.addEventListener('click', openModal);

const gallery = galleryItems.map(createGalleryItem);
galleryContainer.append(...gallery);


for (const item of galleryItems) {
  const html = `<ul class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.description}"
        alt="${item.description}"
      />
    </a>
  </ul>`;
  
}

console.log(galleryItems);
