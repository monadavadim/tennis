const newsBurger = document.getElementById('news__burger');
const newsNav = document.getElementById('header__news-top-nav');

newsBurger.addEventListener('click', () => {
  newsNav.classList.toggle('height');
});