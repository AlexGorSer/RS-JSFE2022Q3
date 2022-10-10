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

// radiobuttons

const radioButton = document.querySelectorAll('.progress_bar_radio-button'),
       amountText = document.querySelector('.amount_conteiner');

function checkRadioValue(radio) {

    for (let index = 0; index < radio.length; index++) {
        if (radio[index].checked)
        amountText.value = radio[index].id;
    }

}
checkRadioValue(radioButton)

radioButton.forEach(e => {
    e.addEventListener('click', () => {
        amountText.value = e.id;
    })
})

amountText.addEventListener('input', () => {
    if(amountText.value.length > 4) {
        alert('Нельзя больше 4 символов')
        amountText.value = amountText.value.slice(0, 4);
    }

    for (let index = 0; index < radioButton.length; index++) {
        if (amountText.value === radioButton[index].id)

        radioButton[index].checked = true;
    }
})