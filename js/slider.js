// シンプルで安定したループ版
const mySwiper = new Swiper('.slider__container', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
    loopedSlides: 3,  // スライド数と同じ数を指定
    speed: 2000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    followFinger: false,
    pagination: {
        el: '.slider__container .swiper-pagination',
        clickable: true,
    },
    // 最小限のイベント
    on: {
        init: function () {
            console.log('Swiper初期化完了');
        }
    }
});