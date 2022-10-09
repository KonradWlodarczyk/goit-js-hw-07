import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const originalSize = (event, imageSrc) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src=${imageSrc}>
`);

  instance.show();
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (basicLightbox.visible() && key === "Escape") {
      instance.close();
    }
  });
};
galleryItems.forEach((item, index) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"> 
  <a class="gallery__link" href=${item.original}> 
    <img 
      class="gallery__image" 
      src=${item.preview} 
      data-source=${item.original}
      alt=${item.description}
    /> 
  </a> 
</div> 
`);
  const galleryLink = document.querySelector(
    `body > div.gallery > div:nth-child(${index + 1}) > a`
  );
  galleryLink.addEventListener("click", (event) => {
    originalSize(event, item.original);
  });
});


console.log(galleryItems);