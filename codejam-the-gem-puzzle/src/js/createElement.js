"use strict";

const wrapper = document.createElement('main');
wrapper.classList.add('wrapper__container');
document.body.appendChild(wrapper);

const divContainer = document.createElement('div');
divContainer.classList.add('puzzle__container');
wrapper.appendChild(divContainer);

const buttonWrapper = document.createElement('div');
buttonWrapper.classList.add('button__wrapper');
divContainer.appendChild(buttonWrapper);

const game = document.createElement('div');
game.classList.add('game__container');
divContainer.appendChild(game);

const complexity = document.createElement('div');
complexity.classList.add('complexity');
divContainer.appendChild(complexity);

const title = document.createElement('h1');
title.classList.add('title__name');
title.textContent = "Puzzle-Game";
buttonWrapper.appendChild(title);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons__container');
buttonWrapper.appendChild(buttonsContainer);

for(let i = 0; i < 4; i++) {
  const buttons = document.createElement('button');
  buttons.classList.add('buttons');
  buttonsContainer.appendChild(buttons);
}

const buttons = document.querySelectorAll('.buttons');

buttons[0].textContent = 'Shuffle and Start';
buttons[1].textContent = 'Play';
buttons[2].textContent = 'Save';
buttons[3].textContent = 'Results';
buttons[0].classList.add('start');
buttons[1].classList.add('stop');
buttons[2].classList.add('save');
buttons[3].classList.add('result');

const buttonWrappers = document.querySelector('.button__wrapper');

const container = document.createElement('div');
container.classList.add('count__container');
buttonWrappers.appendChild(container);

const click = document.createElement('span');
click.classList.add('click');
container.appendChild(click);
click.textContent = 'Clicks 0';

const timer = document.createElement('span');
timer.classList.add('timer');
container.appendChild(timer);
timer.textContent = 'Time 0:0';

const sizeName = document.createElement('h3');
sizeName.classList.add('size__name');
complexity.appendChild(sizeName);
sizeName.innerText = '4x4';

const puzzleSizeContainer = document.createElement('div');
puzzleSizeContainer.classList.add('size__container');
complexity.appendChild(puzzleSizeContainer);

for(let i = 0; i < 6; i++) {
  const buttonsSize = document.createElement('button');
  buttonsSize.classList.add('buttons__size');
  puzzleSizeContainer.appendChild(buttonsSize);
}

const buttonsSize = document.querySelectorAll('.buttons__size');

buttonsSize[0].textContent = '3x3';
buttonsSize[1].textContent = '4x4';
buttonsSize[2].textContent = '5x5';
buttonsSize[3].textContent = '6x6';
buttonsSize[4].textContent = '7x7';
buttonsSize[5].textContent = '8x8';
buttonsSize[0].classList.add('sizeTree');
buttonsSize[1].classList.add('sizeFour');
buttonsSize[2].classList.add('sizeFive');
buttonsSize[3].classList.add('sizeSix');
buttonsSize[4].classList.add('sizeSeven');
buttonsSize[5].classList.add('sizeEight');
