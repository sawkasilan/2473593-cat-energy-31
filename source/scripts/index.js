/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const navToggle = document.querySelector ('.nav__toggle');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--close')) {
    nav.classList.remove('nav--close');
    nav.classList.add('nav--open');
  } else {
    nav.classList.add('nav--close');
    nav.classList.remove('nav--open');
  }
});
