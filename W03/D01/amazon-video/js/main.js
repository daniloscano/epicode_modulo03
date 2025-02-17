const headerSwiper = new Swiper(".header-swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const filmSectionSwiper = new Swiper(".film-section-swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 'auto',
    spaceBetween: '10px',
});

const popularSectionSwiper = new Swiper(".popular-section-swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 'auto',
    spaceBetween: '10px',
});