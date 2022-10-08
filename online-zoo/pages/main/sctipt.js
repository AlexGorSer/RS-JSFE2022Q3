// Burger
const burgerOpen = document.querySelector('.burger__menu'),
      burgerCloseButton = document.querySelector('.close__burger__menu'),
      burgerBack = document.querySelector('.burger'),
      burgerWindow = document.querySelector('.burger__line');

burgerOpen.addEventListener('click', () => {
    burgerWindow.classList.add('burger__on');
    burgerBack.classList.add('burger__on');
});

burgerBack.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target === burgerCloseButton || e.target ===burgerWindow || e.target === burgerBack) {
        burgerWindow.classList.remove('burger__on');
        burgerBack.classList.remove('burger__on');
    }
})