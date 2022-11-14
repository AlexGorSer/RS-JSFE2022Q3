import birdsData from './birds.js';
import birdDef from '../assets/img/bird.06a46938.jpg';
import winAudio from '../assets/sound/win.a1e9e8b6.mp3';
import errAudio from '../assets/sound/error.165166d5.mp3';
import './modal';
import './player.js';
import './galleryModal';




// console.log(birdsData);

const nextButton = document.querySelector('.songbird__button-next');
const birdsItemsList = document.querySelectorAll('.songbird__items-list');
const birdsList =  document.querySelectorAll('.birds-list');
const audioBird = document.querySelector('.songbird__random-audio-header');
const correctAudio = document.querySelector('.bird-audio');
const birdsListContainer = document.querySelector('.songbird__list');
const birdRandomIgm = document.querySelector('.songbird__random-img');
const randomBirdName = document.querySelector('.random__bird__name');
const scoreHeader = document.querySelector('.songbird__score');

const durationTime = document.querySelectorAll('.duration');
const correctTime = document.querySelectorAll('.correct-time');

const fillProgressOne = document.querySelector('.fill-one');
const fillProgressTwo = document.querySelector('.fill-two');


const audio = document.querySelector('.songbird__random-audio-header');
const audioTwo = document.querySelector('.bird-audio');


const birdImg  = document.querySelector('.bird-img');
const birdName  = document.querySelector('.bird-name');
const birdSpec  = document.querySelector('.bird-species');
const birdDescription  = document.querySelector('.bird-description');

const songInst = document.querySelector('.song__bird-none');
const songBirdContainer = document.querySelector('.songbird__card-container');

let globalIndex = 0;
let gameEnd = true;
let objScore = {
  score: 0,
}
createRandomBirds();


function createRandomBirds() {
  let randomArr;
  let randomNum;
  let score = 6;

  randomArr = shuffleArr(birdsData, globalIndex);
  randomNum = getRandomIntInclusive(0, randomArr.length-1);
  getRandomBird(audioBird, randomNum, randomArr);

  addBirdsList(birdsList ,randomArr);


  nextButton.addEventListener('click', ()=> {
    if (globalIndex < birdsData.length-1 && gameEnd === false) {
      score = 6;
      gameEnd = true;
      globalIndex++;
      setDefLine();
      nextGameItems(globalIndex);
      nextButton.classList.remove('active-button');
      randomArr = shuffleArr(birdsData, globalIndex);
      randomNum = getRandomIntInclusive(0, randomArr.length-1);
      getRandomBird(audioBird, randomNum, randomArr);

      addBirdsList(birdsList ,randomArr);
      durationTime[0].textContent = '00:00';
      correctTime[0].textContent = '00:00';
      fillProgressOne.style.width = `${0}%`;
      audio.pause();

      durationTime[1].textContent = '00:00';
      correctTime[1].textContent = '00:00';
      fillProgressTwo.style.width = `${0}%`;
      audioTwo.pause();

      songInst.classList.remove('dispay-none');
      songBirdContainer.classList.add('dispay-none');

    }
    
  })

  birdsListContainer.addEventListener('click', e => {
    let nameTarget;
    if(e.target.classList.contains('birds-list')){
      nameTarget = e.target.textContent;
      if(gameEnd) {
        new Audio(errAudio).play();
      } 
    }  else return;
    
    if(!e.target.classList.contains('active__false') && gameEnd === true) {
      createCard(nameTarget, randomArr);
      
      if(correctAudio.src === audioBird.src) {
        gameEnd = false;
        objScore.score =  objScore.score + score;
        scoreHeader.textContent = `Score: ${objScore.score}`;
        new Audio(winAudio).play();
        e.target.classList.add('active__true');
        nextButton.classList.add('active-button');
        randomBirdName.textContent = birdName.textContent;
        birdRandomIgm.src = birdImg.src;

      } else {
        score--;
        e.target.classList.add('active__false');
        
      }
    }
    getScore();
    songInst.classList.add('dispay-none');
    songBirdContainer.classList.remove('dispay-none');

    createCard(nameTarget, randomArr);

  })
}



function getScore() {
  if (globalIndex === 5 && gameEnd === false) {

    document.querySelector('.score__modal').textContent =`Молодец! Твой счет: ${objScore.score} из 36`;
    document.querySelector('.modal__score').classList.remove('dispay-none');
    document.querySelector('.score__modal__button').addEventListener('click', e=> {
      document.querySelector('.modal__score').classList.add('dispay-none');
      objScore.score = 0;
      globalIndex= -1;
      gameEnd = false;
      setDefLine();
    })
  } 
}


function createCard(name, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (name === arr[i].name) {
        birdImg.src = arr[i].image;
        birdSpec.textContent = arr[i].species;
        birdDescription.textContent = arr[i].description;
        birdName.textContent = arr[i].name;
        correctAudio.src = arr[i].audio;


    } 
  }
  durationTime[1].textContent = '00:00';
  correctTime[1].textContent = '00:00';
  fillProgressTwo.style.width = `${0}%`;
  audioTwo.pause();
}

function getRandomBird(node, num, arr) {
  node.src = arr[num].audio;


}
function addBirdsList(node ,arr) {
  node.forEach((e, i) => {
    e.textContent = `${arr[i].name}`;
  })

}

function shuffleArr(arr, index) {
  return  arr[index].sort( () => Math.random() - 0.5);
}

function nextGameItems(index) {
  birdsItemsList.forEach(e => {
    e.classList.remove('active');
  })

  birdsItemsList[index].classList.add('active');
}

function setDefLine() {
  document.querySelector('.random__bird__name').textContent = '********';
  document.querySelector('.songbird__random-audio-header').src = '#';
  document.querySelector('.songbird__card-img').src = birdDef;
  document.querySelector('.songbird__random-audio').src = '#';
  birdRandomIgm.src = birdDef;
  document.querySelectorAll('.cards').forEach(e => {
    e.textContent = '';
  });
  document.querySelector('.card-text').textContent = 'Нажмите на название птиц';

  document.querySelectorAll('.birds-list').forEach(e => {
    e.classList.remove('active__false');
    e.classList.remove('active__true');
  })
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

