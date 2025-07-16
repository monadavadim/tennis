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

new Swiper('.price__slider', {
  navigation: {
    nextEl: '.services-button-right',
    prevEl: '.services-button-left'
  },
});

const boxes = Array.from(document.querySelectorAll('.prise__leftblock-accordion'));

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest('.prise__leftblock-accordion');
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle('active');
    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
        currentContent.style.maxHeight = 0;
    }
}