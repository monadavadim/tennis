document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const burger = document.getElementById('burger');
const headerNav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});

new Swiper('.trainers__slider', {
  navigation: {
    nextEl: '.trainers__top-button-right',
    prevEl: '.trainers__top-button-left'
  },
  slidesPerView: 6,
  spaceBetween: 25,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
  }
});