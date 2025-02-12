/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD SHADOW HEADER ===============*/

/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000,
  },
});

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
var slideUp = {
  opacity: 0.5,
  duration: 2000,
};

var rotateImage = {
  rotate: { z: 100 },
};

ScrollReveal().reveal(".home-data , .popular-container , .section-title", {
  ...slideUp,
  origin: "top",
  distance: "20%",
});
ScrollReveal().reveal(".leaf", {
  ...slideUp,
  origin: "top",
  distance: "50%",
  opacity: 0,
  delay: 1900,
  duration: 2000,
});
ScrollReveal().reveal(
  ".home-image , .about-data , img.recipe-image , .contact-data",
  {
    ...slideUp,
    origin: "right",
    distance: "50%",
  }
);
ScrollReveal().reveal(".about-image  , .recipe-list , .content-img", {
  ...slideUp,
  origin: "left",
  distance: "50%",
});
ScrollReveal().reveal(".product-item , .footer-container", {
  ...slideUp,
  distance: "50%",
});
ScrollReveal().reveal(".home-pizza ", {
  ...slideUp,
  ...rotateImage,
  origin: "top",
  distance: "10%",
  duration: 2500,
});
