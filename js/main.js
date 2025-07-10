const burger = document.getElementById('burger');
const headerNav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});