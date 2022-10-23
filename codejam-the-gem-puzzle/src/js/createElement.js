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
buttons[1].textContent = 'Stop';
buttons[2].textContent = 'Save';
buttons[3].textContent = 'Results';
buttons[0].classList.add('start');
buttons[1].classList.add('stop');
buttons[2].classList.add('save');
buttons[3].classList.add('result');