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


const popup = document.querySelector('.popup__wrapper'),
      popupRangeLine = document.querySelector('.testimonials__line'),
    //   testimonialsCard = document.querySelectorAll('.testimonials__card'),
      testimonialsCardPopup = document.querySelector('.testimonials__card-popup'),
      textFinde = document.querySelector('.testimonials__card-text'),
      popupCloseButton = document.querySelector('.popup__button');






const cardConteiner = document.querySelector('.testimonials__cards');




const testiData = [
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Michael John",
        "data": "Local Austria • Today",
        "comment": `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        `
    },
    {
        "avatar": "../../assets/img/Ellipse 2.png",
        "name": "Oskar Samborsky",
        "data": "Local Austria • Yesterday",
        "comment": `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        `
    },
    {
        "avatar": "../../assets/img/Ellipse3.png",
        "name": "Fredericka Michelin",
        "data": "Local Austria • Yesterday",
        "comment": `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        `
    },
    {
        "avatar": "../../assets/img/Ellipse4.png",
        "name": "Mila Riksha",
        "data": "Local Austria • Yesterday",
        "comment": `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
        `
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Freddi",
        "data": "Local Austria • Now",
        "comment": `Зачем к устройству с "интуитивно-понятным интерфейсом" инструкция на 100+ страниц?`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Michel",
        "data": "Local Austria • yes",
        "comment": `Когда появятся беспилотные самолеты, первыми в них откажутся летать программисты.`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Devil",
        "data": "Local Austria • Yesterday",
        "comment": `- Доктор, я себя чувствую, как C++.
        - Это как?
        - Меня никто не понимает, все боятся, и говорят, что я больше не нужен...`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Papa",
        "data": "Local Austria • Yesterday",
        "comment": `Сольфеджио для программистов: интервьюер читает тебе вслух код, а ты должен сказать, что этот код делает.`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Mama",
        "data": "Local Austria • Yesterday",
        "comment": `Программист - это единственная в мире профессия, где платят деньги, чтобы ты исправил ошибки, которые допустил, когда перед этим сделал свою работу херово.`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Your Wife",
        "data": "Local Austria • Yesterday",
        "comment": `Попроси программиста проверить 10 строк кода, он найдёт 10 проблем.
        Попроси его проверить 500 строк, он скажет, что выглядит норм.`
    },
    {
        "avatar": "../../assets/img/svg/user_icon.svg",
        "name": "Sidorovvich",
        "data": "Local Austria • Yesterday",
        "comment": `Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий – и мы в расчете. Заодно посмотрим, как быстро у тебя башка после амнезии прояснится. А по твоей теме постараюсь разузнать. Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что…`
    },
]

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


let testimonialsMass = [];


function createTestimArr() {

    for(let i = 0; i < testiData.length; i++) {
        let random = getRandomNumber(0, testiData.length-1);
        if(testimonialsMass.includes(random)) {
            i--
        } else {
            testimonialsMass.push(random)
        }
    }
    
}
createTestimArr();

console.log(testimonialsMass)



testiData.forEach((e, index) =>{
    let testiCard = document.createElement('div');
    let Title = document.createElement('div');

    testiCard.classList.add('testimonials__card');
    Title.classList.add('testimonials__card-title');
    cardConteiner.appendChild(testiCard);
    testiCard.appendChild(Title);

    let avatar = document.createElement('img');
    let textConteiner = document.createElement('div');
    textConteiner.classList.add('testimonials__card-name');
    avatar.src = testiData[testimonialsMass[index]].avatar;
    Title.appendChild(avatar);
    Title.appendChild(textConteiner);


    let h4Text = document.createElement('h4');
    let pText = document.createElement('p');
    let pTextTwo = document.createElement('p');
    pTextTwo.classList.add('testimonials__card-text')
    h4Text.innerText =  testiData[testimonialsMass[index]].name;
    pText.innerText =  testiData[testimonialsMass[index]].data;
    pTextTwo.innerText =  testiData[testimonialsMass[index]].comment;

    textConteiner.appendChild(h4Text);
    textConteiner.appendChild(pText);
    testiCard.appendChild(pTextTwo);

    // testiCard.addEventListener('click', (e) => {
    //     if (window.innerWidth < 956) {
    //         testimonialsCardPopup.innerHTML = testimonialsCard[index].innerHTML
    //         testimonialsCardPopup.children[1].classList.add('popup__text');
    //         popup.classList.remove('popup__hidden');
    // }

    // })

})

let testimonialsCard = document.querySelectorAll('.testimonials__card');
const cardWidth = document.querySelector('.testimonials__card').clientWidth;

function getWindiw() {
    if (window.innerWidth < 1520) {
        popupRangeLine.max = 8;
    } else {
        popupRangeLine.max = 7;
    }
}
getWindiw()

popupCloseButton.addEventListener('click', () => {
    popup.classList.add('popup__hidden');
})
popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.add('popup__hidden');
    }
})

testimonialsCard.forEach((e, index) => {
    e.addEventListener('click', (e) => {
        if (window.innerWidth < 956) {
            testimonialsCardPopup.innerHTML = testimonialsCard[index].innerHTML
            testimonialsCardPopup.children[1].classList.add('popup__text');
            popup.classList.remove('popup__hidden');
    }
})
})


// Range


function transform (e) {
    cardConteiner.style.transform = `translate(${ e *(-cardWidth -35 )}px)`
   
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 1520) {
        popupRangeLine.max = 8;
    } else {
        popupRangeLine.max = 7;
    }
})

popupRangeLine.addEventListener('input', (e) => {
        transform (popupRangeLine.value)

})
