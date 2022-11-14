

const startPages = document.querySelector('.start__pages');
const startPagesButton = document.querySelector('.button__start');
const startPageNavButton = document.querySelector('.start__page');
const body = document.body;

// console.log(body);
body.style.overflow = 'hidden';

startPagesButton.addEventListener('click', e => {
  startPages.classList.add('hidden__start-page');
  body.style.overflow = 'scroll';
})

startPageNavButton.addEventListener('click', e => {
  startPages.classList.remove('hidden__start-page');
  body.style.overflow = 'hidden';
})