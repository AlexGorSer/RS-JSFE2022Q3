import pauseIcon from '../assets/svg/pause-fill.svg';
import playIcon from '../assets/svg/play-fill.svg';

const playerButton = document.querySelector('.player-button');
const audio = document.querySelector('.songbird__random-audio-header');
const audioTwo = document.querySelector('.bird-audio');
const progressBarTwo = document.querySelector('.bar-two');
const progressBarOne = document.querySelector('.bar-one');
const fillProgressOne = document.querySelector('.fill-one');
const fillProgressTwo = document.querySelector('.fill-two');
const headerIcon = document.querySelector('.header-icon');
const cardIcon = document.querySelector('.card-icon');
const durationTime = document.querySelectorAll('.duration');
const correctTime = document.querySelectorAll('.correct-time');
const playerButtonTwo = document.querySelector('.button-two');


let songPlayHeader = false;
let songPlayCard = false;



function playAudio(songPath, pathIcon) {
  songPath.play();
  pathIcon.src = pauseIcon;
}

function pauseAudio(songPath, pathIcon) {
  songPath.pause();
  pathIcon.src = playIcon;
}

playerButtonTwo.addEventListener('click', ()=> {
  console.log(songPlayCard);
  if(songPlayCard === false) {
    songPlayCard = true;
    playAudio(audioTwo,cardIcon);
    

  } else {

    songPlayCard = false;
    pauseAudio(audioTwo,cardIcon);
    
  }
  
})
playerButton.addEventListener('click', ()=> {
  console.log(songPlayHeader);
  if(songPlayHeader === false) {
    
    songPlayHeader = true;
    playAudio(audio,headerIcon);

  } else {
    songPlayHeader = false;
    pauseAudio(audio,headerIcon);
    
  }
  
})

function progressUpdate(e, fill, dur, corr) {
  // const {duration, currentTime} = e.srcElement;
  const duration = e.duration;
  const currentTime = e.currentTime
  const progressFill = (currentTime / duration)* 100;
  fill.style.width = `${progressFill}%`;

  setTimeAudio(duration, currentTime, dur, corr)

}

function setProgress(e) {
  const barWidth = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / barWidth) * duration;

}
function setProgressTwo(e) {
  const barWidth = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audioTwo.duration;

  audioTwo.currentTime = (clickX / barWidth) * duration;

}

audio.addEventListener('timeupdate', (e) => {
  progressUpdate(audio, fillProgressOne, durationTime[0], correctTime[0])
});

audio.addEventListener('ended', () => {
  songPlay = false;
  headerIcon.src = playIcon;
});
progressBarOne.addEventListener('click', setProgress);



audioTwo.addEventListener('timeupdate', (e)=> {
  progressUpdate(audioTwo, fillProgressTwo, durationTime[1], correctTime[1])
});

audioTwo.addEventListener('ended', () => {
  songPlay = false;
  cardIcon.src = playIcon;
});
progressBarTwo.addEventListener('click', setProgressTwo);

function setTimeAudio(duration, currentTime, pathDur, pathCorr) {

  const durSec = parseInt(duration % 60);
  const durMin = parseInt((duration/60) % 60);
  const corrSec = parseInt(currentTime % 60);
  const corrMin = parseInt((currentTime/60) % 60);

  pathDur.textContent = `${durMin.toString().padStart(2,0)}:${durSec.toString().padStart(2,0)}`;
  pathCorr.textContent = `${corrMin.toString().padStart(2,0)}:${corrSec.toString().padStart(2,0)}`;

}


const muteBar = document.querySelectorAll('.mute-fill');
const muteProgress = document.querySelectorAll('.mute-progress');



muteProgress[0].addEventListener('click',  e => {
  const sliderWidth = muteProgress[0].clientWidth;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  muteBar[0].style.width = `${newVolume * 100}%`;

});

muteProgress[1].addEventListener('click',  e => {
  const sliderWidth = muteProgress[1].clientWidth;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audioTwo.volume = newVolume;
  muteBar[1].style.width = `${newVolume * 100}%`;

});

const birdsListContainer = document.querySelector('.songbird__list');
const nextButton = document.querySelector('.songbird__button-next');
const birdsList =  document.querySelectorAll('.birds-list');

birdsListContainer.addEventListener('click', e => {
  // songPlayHeader = false;
  songPlayCard = false;
  // headerIcon.src = playIcon;
  cardIcon.src = playIcon;
})
// birdsList.forEach()
nextButton.addEventListener('click', e => {
  songPlayHeader = false;
  songPlayCard = false;
  headerIcon.src = playIcon;
  cardIcon.src = playIcon;
})