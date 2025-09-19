const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    autoplay: { delay: 2500 },
    navigation: {         // setas
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.reviews-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

const clinicaSwiper = new Swiper('.clinica-swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: '.clinica-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clinica-button-next',
    prevEl: '.clinica-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});