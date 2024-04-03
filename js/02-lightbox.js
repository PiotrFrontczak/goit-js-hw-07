import { galleryItems } from './gallery-items.js';
// Change code below this line




for (const item of galleryItems) {
  const html = `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`;

console.log(galleryItems);
