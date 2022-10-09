import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item, index) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href=${item.original}> 
    <img 
      class="gallery__image" 
      src=${item.preview} 
      data-source=${item.original}
      alt=${item.description}
    /> 
  </a> 
`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);
