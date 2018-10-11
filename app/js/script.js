window.addEventListener('load', function () {
    var banner = new Swiper('.banner-slider', {
        speed: 700,
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        preventClicks: true,
        navigation: {
            prevEl: '.banner-arrow__item_prev',
            nextEl: '.banner-arrow__item_next'
        },
        pagination: {
            el: '.banner-slider-pagination__bullet',
            type: 'bullets',
            clickable: true
        },
    });
});
