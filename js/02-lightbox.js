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
  galleryImage.setAttribute('alt', description); 

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function initializeLightbox() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250
  });
}

const gallery = galleryItems.map(createGalleryItem);
galleryContainer.append(...gallery);

for (const item of galleryItems) {
    const html = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
</li>`;
}
initializeLightbox();