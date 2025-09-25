const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    autoplay: { delay: 2500 },
    navigation: {         // setas
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});