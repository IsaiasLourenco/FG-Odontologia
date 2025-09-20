const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    autoplay: { delay: 2500 },
    navigation: {         // setas
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper_clinica = new Swiper('.swiper-clinica', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination-clinica',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-clinica',
        prevEl: '.swiper-button-prev-clinica',
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