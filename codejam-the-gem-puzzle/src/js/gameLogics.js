
import soundClick from '../sound/menu-bleep-rnc.mp3';
import soundMenu from '../sound/03-cutman-stage.mp3';

// new Audio(soundMenu).play();

const game = document.querySelector('.game__container');


// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 0]
// ]
const start = document.querySelector('.start');


let matrix = [1, 2, 3, 4,
              5, 6, 7, 8,
              9, 10, 11, 12,
              13, 14, 15,
            ];
            matrix.push('');

let click = 0;
let gameStart = false;
let minute = 0;
let seconds = 0;

document.querySelector('.stop').addEventListener('click', e => {
  if(gameStart === true) {
    gameStart = false;
    document.querySelector('.stop').textContent = 'Pause'
  } else {
    gameStart = true;
    document.querySelector('.stop').textContent = 'Stop'
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
    alert(`Поздравляю! Игра завершена за ${click} кликов`)
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
        new Audio(soundClick).play();
  
      } else if(matrix[index + 4]===''){
  
        let buf2 = matrix[index + 4];
        matrix[index + 4] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget); 
        new Audio(soundClick).play();
  
      }else if(matrix[index + 1]===''){
        let buf2 = matrix[index + 1];
        matrix[index + 1] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        new Audio(soundClick).play();
  
      }else if(matrix[index - 1]===''){
        let buf2 = matrix[index - 1];
        matrix[index - 1] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        new Audio(soundClick).play();
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