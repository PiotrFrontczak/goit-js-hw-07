import { galleryItems } from './gallery-items.js';
import SimpleLightbox from '../simplelightbox-master/dist/simple-lightbox.esm.js';

// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  // Array of gallery items
  const galleryItems = [
    { small: "small-image1.jpg", large: "large-image1.jpg", alt: "Image 1 description" },
    { small: "small-image2.jpg", large: "large-image2.jpg", alt: "Image 2 description" },
    // Add more items as needed
  ];

  // Function to create and render gallery items
  function renderGalleryItems() {
    const galleryContainer = document.querySelector(".gallery");

    galleryItems.forEach(item => {
      const galleryItem = document.createElement("li");
      galleryItem.classList.add("gallery__item");

      const link = document.createElement("a");
      link.classList.add("gallery__link");
      link.href = item.large;

      const image = document.createElement("img");
      image.classList.add("gallery__image");
      image.src = item.small;
      image.alt = item.alt;

      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryContainer.appendChild(galleryItem);
    });
  }

  // Call function to render gallery items
  renderGalleryItems();

  // Initialize SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250 // Display caption after 250 milliseconds
  });

  for (const item of galleryItems) {
    const html = `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>`;

    console.log(html);
  }
});
