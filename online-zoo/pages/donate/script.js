// Burger
const burgerOpen = document.querySelector('.burger__menu'),
      burgerCloseButton = document.querySelector('.close__burger__menu'),
      burgerWindow = document.querySelector('.burger__line');

burgerOpen.addEventListener('click', () => {
    burgerWindow.classList.add('burger__on');
});
burgerCloseButton.addEventListener('click', () => {
    burgerWindow.classList.remove('burger__on')
});
burgerWindow.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target === burgerCloseButton || e.target ===burgerWindow) {
        burgerWindow.classList.remove('burger__on')
    }
})