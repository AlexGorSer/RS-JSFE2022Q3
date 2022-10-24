
import soundClick from '../sound/menu-bleep-rnc.mp3';
import soundMenu from '../sound/03-cutman-stage.mp3';

// new Audio(soundMenu).play();

const game = document.querySelector('.game__container');
const gameContainer = document.querySelector('.puzzle__container');


// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 0]
// ]
const start = document.querySelector('.start');

alert('Привет! Проверьте будте добры, проверьте задание в последний день, мне осталось доделать немного!');
alert('Нажмите на Play что-бы запустить изи мод для теста функций.');
let matrix = [1, 2, 3, 4,
              5, 6, 7, 8,
              9, 10, 12, 15,
              13, 14, 11,
            ];
            matrix.push('');

let click = 0;
let gameStart = false;
let minute = 0;
let seconds = 0;
let mutedSound = false;

document.querySelector('.stop').addEventListener('click', e => {
  if(gameStart === true) {
    gameStart = false;
    document.querySelector('.stop').textContent = 'Play'
  } else {
    gameStart = true;
    document.querySelector('.stop').textContent = 'Pause'
  }
})

start.addEventListener('click', e => {
  gameStart = true;
  matrix.sort(() => Math.random() - 0.2);
  
  matrix.forEach((e, index) => {
    plate[index].textContent = e;
  })
  click = 0;
  minute = 0;
  seconds = 0;
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
})

function getClicks() {
  click++;
  document.querySelector('.click').textContent = `Clicks ${click}`;
}
setInterval(getTime, 1000);
function getTime() {
  if(gameStart === true) {
    seconds++ 
    if(seconds>59) {
      seconds = 0;
      minute++
    }
    document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  }

}

let finalTarget = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];


function isWin(matrix, final){
  let one = JSON.stringify(matrix);
  let two = JSON.stringify(final);
  if(one === two) {
    gameStart = false;
    saveResultInLocalStorage();
    alert(`Поздравляю! Игра завершена за ${click} кликов и ${minute}:${seconds} времени.`);
  }

}
function createGame2(arr){
  for(let i= 0; i < arr.length; i++){
    let puz = document.createElement('div');
    puz.classList.add('plate__style');
    puz.textContent = arr[i];
    puz.dataset.id = arr[i];
    game.appendChild(puz);

      if(arr[i] === '') {
        puz.classList.add('zero__plate');
        // puz.textContent =  '';
      }

      
  }
}
createGame2(matrix);

const plate = document.querySelectorAll('.plate__style');
function render(matrix, plates) {
  // plates.forEach(target => {
  //   target.textContent = '';
  // });
  matrix.forEach((e, index) => {
    plate[index].textContent = e;
  })


};
function playSound() {
  if(mutedSound === false) {
    new Audio(soundClick).play();
  }
  
}

plate.forEach((e, index) => {
  
  e.addEventListener('click', (e) => {
    if(gameStart === true) {
      if(matrix[index - 4] === '') {
        let buf2 = matrix[index - 4];
        matrix[index - 4] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
  
      } else if(matrix[index + 4]===''){
  
        let buf2 = matrix[index + 4];
        matrix[index + 4] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget); 
        playSound();
  
      }else if(matrix[index + 1]===''){
        let buf2 = matrix[index + 1];
        matrix[index + 1] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
  
      }else if(matrix[index - 1]===''){
        let buf2 = matrix[index - 1];
        matrix[index - 1] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
      } else {
        console.log(false)
      }
    }
  })
})

// function animation(target) {
//   target.addEventListener('animationend', e => {
//     target.classList.remove('moveBot');
//   })
// }
let saveResult = [];

window.addEventListener('load', e =>{
  let result = localStorage.getItem('result');
  result = JSON.parse(result);
  if(result !== null) {
    result.forEach(e => {
      saveResult.push(e);
    })
  }
})
const saveProgressButton = document.querySelector('.save');

saveProgressButton.addEventListener('click', e => {
  saveResultInLocalStorage();
})

function saveResultInLocalStorage() {
  let result = {};
  result.clicks = click;
  result.minute = minute;
  result.seconds = seconds;
  if(saveResult.length === 10) {
    saveResult.shift();
  }
  saveResult.push(result);

  localStorage.setItem('result', JSON.stringify(saveResult));
  console.log(saveResult);
}

const getResultsButton = document.querySelector('.result');

getResultsButton.addEventListener('click', e => {

  let result = localStorage.getItem('result');
  result = JSON.parse(result);


  let resContainer = document.createElement('div');
  resContainer.classList.add('res__container');
  gameContainer.appendChild(resContainer);

  let title = document.createElement('h2');
  title.classList.add('res__title');
  resContainer.appendChild(title);
  title.textContent = 'Таблица результатов';
  if(result !== null) {
    result.forEach((e, index) => {
      let row = document.createElement('div');
      row.classList.add('row__style');
      resContainer.appendChild(row);
      row.textContent = `Кликов ${saveResult[index].clicks}. Время ${saveResult[index].minute}:${saveResult[index].seconds}`
  
    })
  
    let node = document.querySelector('.res__container');
    node.addEventListener('click', e =>{
      node.remove();
    })
  } else {
    let row = document.createElement('div');
    row.classList.add('row__style');
    resContainer.appendChild(row);
    row.textContent = 'Таблица пустая'

    let node = document.querySelector('.res__container');
    node.addEventListener('click', e =>{
      node.remove();
    })
    
  }


})