import { title } from 'assets/Tips';

export default {
  direction: 'vertical',
  initialSlide: 0,
  loop: false,
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${title()[index]}</span>`;
    },
    breakpoints: {
    },
  },
};
