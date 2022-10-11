// import  DataPet from "../main/dataPet.js";

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

let oneArr = [];
let twoArr = [];
let threeArr = [];


function createThremArr(arr, obj) {

    for(let i = 0; i < 6; i++) {
        let random = getRandomNumber(0, obj.length-1);
        if(arr.includes(random)) {
            i--
        } else {
            arr.push(random)
        }
    }   
}

createThremArr(oneArr, DataPet);
createThremArr(twoArr, DataPet);
createThremArr(threeArr, DataPet);


let cardBlock = document.querySelectorAll('.block-one');
let cardBlockLeft = document.querySelector('.left');
let cardBlockMiddle = document.querySelector('.middle');
let cardBlockRight = document.querySelector('.right');


 function createElement(arr, index) {

    arr.forEach((e, i) =>{

        let card = document.createElement('div');
        card.classList.add('backstage__card_style');
        
        cardBlock[index].appendChild(card)

        let img = document.createElement('img');
        card.appendChild(img);
        img.src = DataPet[arr[i]].img;

        let textConteiner = document.createElement('div');
        textConteiner.classList.add('backstage__card_style_text');
        card.appendChild(textConteiner);
        let div = document.createElement('div');

        textConteiner.appendChild(div);

        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.innerText = DataPet[arr[i]].name;
        p.innerText = DataPet[arr[i]].nativ;
        div.appendChild(h3);
        div.appendChild(p);

        let imgConteiner = document.createElement('div');
        imgConteiner.classList.add('card__svg');
        textConteiner.appendChild(imgConteiner);

        let imgEat =  document.createElement('img');
        imgEat.src = DataPet[arr[i]].eat;
        imgConteiner.appendChild(imgEat);
    })
 
 }
//  createElement(oneArr, 0);
 createElement(twoArr, 1);
//  createElement(threeArr, 2);


let left = document.querySelector('.button__left');
    left.addEventListener('click', () => {

    if(window.innerWidth > 1520) {
        document.querySelector('.carusel').classList.add('move-leftOne');
    } else if (window.innerWidth < 1520 && window.innerWidth > 956) {
        document.querySelector('.carusel').classList.add('move-leftTwo');
    } else if (window.innerWidth < 956) {
        document.querySelector('.carusel').classList.add('move-leftThree');
    }
    if(cardBlock[2].children.length === 0) {
        createArrOne(2)
    }
    


})
let right = document.querySelector('.button__right');
    right.addEventListener('click', () => {
    if(window.innerWidth > 1520) {
        document.querySelector('.carusel').classList.add('move-rightOne');
    } else if (window.innerWidth < 1520 && window.innerWidth > 956) {
        document.querySelector('.carusel').classList.add('move-rightTwo');
    } else if (window.innerWidth < 956) {
        document.querySelector('.carusel').classList.add('move-rightThree');
    } 
    if(cardBlock[0].children.length === 0) {
        createArrThree(0)
    }
    

})
console.log(cardBlock[0].children.length)

let animation =  document.querySelector('.carusel');

animation.addEventListener('animationend', (e) => {

    if(e.animationName === 'moveLeftOne' || e.animationName === 'moveLeftTwo' || e.animationName === 'moveLeftThree') {
        cardBlock[1].innerHTML = cardBlock[2].innerHTML
    } else {
        cardBlock[1].innerHTML = cardBlock[0].innerHTML
    }

    cardBlock[2].innerHTML = ''
    cardBlock[0].innerHTML = ''
    document.querySelector('.carusel').classList.remove('move-leftOne');
    document.querySelector('.carusel').classList.remove('move-rightOne');
    document.querySelector('.carusel').classList.remove('move-leftTwo');
    document.querySelector('.carusel').classList.remove('move-rightTwo');
    document.querySelector('.carusel').classList.remove('move-leftThree');
    document.querySelector('.carusel').classList.remove('move-rightThree');
})


console.log(cardBlock[1].childNodes.length);

function createArrOne(index) {

let oneArr = [];
createThremArr(oneArr, DataPet);

        create(oneArr, index)


 }
 function createArrThree(index) {

    let threeArr = [];
    createThremArr(threeArr, DataPet);
    
    create(threeArr, index)
    
 }

 function create(arr, index) {
    arr.forEach((e, i) =>{

        let card = document.createElement('div');
        card.classList.add('backstage__card_style');
        
        cardBlock[index].appendChild(card)

        let img = document.createElement('img');
        card.appendChild(img);
        img.src = DataPet[arr[i]].img;

        let textConteiner = document.createElement('div');
        textConteiner.classList.add('backstage__card_style_text');
        card.appendChild(textConteiner);
        let div = document.createElement('div');

        textConteiner.appendChild(div);

        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.innerText = DataPet[arr[i]].name;
        p.innerText = DataPet[arr[i]].nativ;
        div.appendChild(h3);
        div.appendChild(p);

        let imgConteiner = document.createElement('div');
        imgConteiner.classList.add('card__svg');
        textConteiner.appendChild(imgConteiner);

        let imgEat =  document.createElement('img');
        imgEat.src = DataPet[arr[i]].eat;
        imgConteiner.appendChild(imgEat);
    })
 }