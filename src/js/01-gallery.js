// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
const imageItems = createGalleryItems(galleryItems);
imageGallery.insertAdjacentHTML('beforeend',imageItems);
console.log(imageGallery);
function createGalleryItems(items){
    return galleryItems.map(({preview,original,description})=>
    {
    return `
    <li class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  </li>`
    }).join('');
};
console.log(galleryItems);
let gallery = new SimpleLightbox('.gallery a',
{captions:true,
captionsData:'alt',
captionDelay: 250,});

console.log(galleryItems);
