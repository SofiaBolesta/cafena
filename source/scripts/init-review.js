import {Swiper} from '../scripts/swiper.js';
const REVIEW_SWIPER = document.querySelector('.review__swiper');

export const INIT_REVIEW_SWIPER = () => {
  if (REVIEW_SWIPER) {
    (() =>
      new Swiper('.review__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        mousewheel: true,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
