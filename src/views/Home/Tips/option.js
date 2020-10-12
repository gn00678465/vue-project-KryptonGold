import { title } from 'assets/Tips';

export default {
  initialSlide: 0,
  loop: false,
  speed: 1600,
  height: 984,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${title()[index]}</span>`;
    },
  },
  breakpoints: {
    768: {
      direction: 'vertical',
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
