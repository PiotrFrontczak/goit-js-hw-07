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
  galleryImage.setAttribute('alt', description); // Dodanie opisu do atrybutu alt
  galleryImage.loading = 'lazy'; // Opcjonalne: dodanie lazy loading

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// Inicjalizacja SimpleLightbox po utworzeniu elementów galerii
function initializeLightbox() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // Wyświetlanie podpisów z atrybutu alt
    captionDelay: 250 // Opóźnienie wyświetlania podpisów
  });
}

const gallery = galleryItems.map(createGalleryItem);
galleryContainer.append(...gallery);

// Wywołanie funkcji initializeLightbox po utworzeniu galerii
initializeLightbox();