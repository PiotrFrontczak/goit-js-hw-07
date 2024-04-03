import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");
let lightboxInstance; 

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

function openModal(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'IMG') {
    return;
  }

  const largeImg = ev.target.dataset.source;

  lightboxInstance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">`);
    lightboxInstance.show();

  window.addEventListener('keydown', closeModalOnEscape);
}

function closeModalOnEscape(ev) {
  if (ev.key === 'Escape') {
    lightboxInstance.close(); 
    window.removeEventListener('keydown', closeModalOnEscape);
  }
}

galleryContainer.addEventListener('click', openModal);

const gallery = galleryItems.map(createGalleryItem);
galleryContainer.append(...gallery);

console.log(galleryItems);