import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");


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

  basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">`).show();

  window.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(ev) {
    if (ev.key === 'Escape') {
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