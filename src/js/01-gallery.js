// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// підключення бібліотеки 
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

// Використання методу reduce() - створення галереї картинок
const markup = galleryItems.reduce((acc, { preview, original, description }) => acc + `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      loading="lazy" 
    />
  </a>
</li>`, "");
// додавання створених картинок
galleryContainer.insertAdjacentHTML("beforeend", markup);
// в цій частині коду застосовуємо бібліотеку SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
        captions: 'true',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
     });
// в цій частині коду реалізуємо делегування подій і відкриття бібліотеки при натисканні на картинку
galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (e.target.classList.contains("gallery__image"))
    
    lightbox.open()
     })


console.log(galleryItems);
console.log(galleryItems);
