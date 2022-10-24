
import soundClick from '../sound/menu-bleep-rnc.mp3';


const game = document.querySelector('.game__container');
const gameContainer = document.querySelector('.puzzle__container');


const start = document.querySelector('.start');

// alert('Привет! Проверьте будте добры, проверьте задание в последний день, мне осталось доделать немного!');
// alert('Нажмите на Play что-бы запустить изи мод для теста функций. Нажмите Shuffle and Start что-бы начать игру.');

let click = 0;
let gameStart = false;
let minute = 0;
let seconds = 0;
let mutedSound = false;
let size = '4x4';

function playSound() {
  if(mutedSound === false) {
    new Audio(soundClick).play();
  }
  
}

function getClicks() {
  click++;
  document.querySelector('.click').textContent = `Clicks ${click}`;
}

document.querySelector('.stop').addEventListener('click', e => {
  if(gameStart === true) {
    gameStart = false;
    document.querySelector('.stop').textContent = 'Play'
  } else {
    gameStart = true;
    document.querySelector('.stop').textContent = 'Pause'
  }
})

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

function isWin(matrix, final){
  let one = JSON.stringify(matrix);
  let two = JSON.stringify(final);
  if(one === two) {
    gameStart = false;
    saveResultInLocalStorage();
    alert(`Поздравляю! Игра завершена за ${click} кликов и ${minute}:${seconds} времени.`);
  }
}

const sizeNameTitle = document.querySelector('.size__name');





//Генерация игры 3на3
const size3 = document.querySelector('.sizeTree'); 
size3.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '3x3'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '3x3';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  document.querySelector('.stop').textContent = 'Play'
  createGameSizeThree();
})
function createGameSizeThree() {
  let matrix = [1,2,3,4,5,6,7,8];
  matrix.push('');
  let finalTarget = [1, 2, 3, 4, 5, 6, 7, 8,''];


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
    document.querySelector('.stop').textContent = 'Pause';
    })

    function createGame2(arr){
      for(let i= 0; i < arr.length; i++){
      let puz = document.createElement('div');
      puz.classList.add('plate__styleThree');
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

      const plate = document.querySelectorAll('.plate__styleThree');
      function render(matrix, plates) {
      matrix.forEach((e, index) => {
      plate[index].textContent = e;
      })
      };

      plate.forEach((e, index) => {

        e.addEventListener('click', (e) => {
        if(gameStart === true) {
        if(matrix[index - 3] === '') {
        let buf2 = matrix[index - 3];
        matrix[index - 3] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
        
        } else if(matrix[index + 3]===''){
        
        let buf2 = matrix[index + 3];
        matrix[index + 3] = matrix[index];
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


  
}
//Генерация игры 4на4

const size4 = document.querySelector('.sizeFour'); 
size4.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '4x4'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '4x4';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  document.querySelector('.stop').textContent = 'Play'
  createGameSizeFour();
})

function createGameSizeFour() {
  let matrix = [1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 12, 15,
    13, 14, 11,
  ];
  matrix.push('');
let finalTarget = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];

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
document.querySelector('.stop').textContent = 'Play'
})

function createGame2(arr){
for(let i= 0; i < arr.length; i++){
let puz = document.createElement('div');
puz.classList.add('plate__styleFour');
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

const plate = document.querySelectorAll('.plate__styleFour');
function render(matrix, plates) {
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

}
createGameSizeFour();

//Генерация игры 5на5

const size5 = document.querySelector('.sizeFive'); 
size5.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '5x5'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '5x5';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  createGameSizeTFive();
})
function createGameSizeTFive() {
  let matrix = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  matrix.push('');
  let finalTarget = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,''];


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
    document.querySelector('.stop').textContent = 'Play'
    })

    function createGame2(arr){
      for(let i= 0; i < arr.length; i++){
      let puz = document.createElement('div');
      puz.classList.add('plate__styleFive');
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

      const plate = document.querySelectorAll('.plate__styleFive');
      function render(matrix, plates) {
      matrix.forEach((e, index) => {
      plate[index].textContent = e;
      })
      };

      plate.forEach((e, index) => {

        e.addEventListener('click', (e) => {
        if(gameStart === true) {
        if(matrix[index - 5] === '') {
        let buf2 = matrix[index - 5];
        matrix[index - 5] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
        
        } else if(matrix[index + 5]===''){
        
        let buf2 = matrix[index + 5];
        matrix[index + 5] = matrix[index];
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


  


}
//Генерация игры 6на6
const size6 = document.querySelector('.sizeSix'); 
size6.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '6x6'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '6x6';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  document.querySelector('.stop').textContent = 'Play'
  createGameSizeTSix();
})

function createGameSizeTSix() {
  let matrix = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,];
  matrix.push('');
  let finalTarget = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,''];


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
    document.querySelector('.stop').textContent = 'Pause';
    })

    function createGame2(arr){
      for(let i= 0; i < arr.length; i++){
      let puz = document.createElement('div');
      puz.classList.add('plate__styleSix');
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

      const plate = document.querySelectorAll('.plate__styleSix');
      function render(matrix, plates) {
      matrix.forEach((e, index) => {
      plate[index].textContent = e;
      })
      };

      plate.forEach((e, index) => {

        e.addEventListener('click', (e) => {
        if(gameStart === true) {
        if(matrix[index - 6] === '') {
        let buf2 = matrix[index - 6];
        matrix[index - 6] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
        
        } else if(matrix[index + 6]===''){
        
        let buf2 = matrix[index + 6];
        matrix[index + 6] = matrix[index];
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

}
//Генерация игры 7на7

const size7 = document.querySelector('.sizeSeven'); 
size7.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '7x7'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '7x7';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  document.querySelector('.stop').textContent = 'Play'
  createGameSizeTSeven();
})

function createGameSizeTSeven() {
  let matrix = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
  matrix.push('');
  let finalTarget = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,''];


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
    document.querySelector('.stop').textContent = 'Pause';
    })

    function createGame2(arr){
      for(let i= 0; i < arr.length; i++){
      let puz = document.createElement('div');
      puz.classList.add('plate__styleSeven');
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

      const plate = document.querySelectorAll('.plate__styleSeven');
      function render(matrix, plates) {
      matrix.forEach((e, index) => {
      plate[index].textContent = e;
      })
      };

      plate.forEach((e, index) => {

        e.addEventListener('click', (e) => {
        if(gameStart === true) {
        if(matrix[index - 7] === '') {
        let buf2 = matrix[index - 7];
        matrix[index - 7] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
        
        } else if(matrix[index + 7]===''){
        
        let buf2 = matrix[index + 7];
        matrix[index + 7] = matrix[index];
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
}
//Генерация игры 8на8
const size8 = document.querySelector('.sizeEight'); 
size8.addEventListener('click', e => {
  game.innerHTML = '';
  sizeNameTitle.textContent = '8x8'
  gameStart = false;
  minute = 0;
  seconds = 0;
  click = 0;
  size = '8x8';
  document.querySelector('.click').textContent = `Clicks ${click}`;
  document.querySelector('.timer').textContent = `Time ${minute}:${seconds}`;
  document.querySelector('.stop').textContent = 'Play'
  createGameSizeTEight();
})

function createGameSizeTEight() {
  let matrix = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
  matrix.push('');
  let finalTarget = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63, ''];


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
    document.querySelector('.stop').textContent = 'Pause';
    })

    function createGame2(arr){
      for(let i= 0; i < arr.length; i++){
      let puz = document.createElement('div');
      puz.classList.add('plate__styleEight');
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

      const plate = document.querySelectorAll('.plate__styleEight');
      function render(matrix, plates) {
      matrix.forEach((e, index) => {
      plate[index].textContent = e;
      })
      };

      plate.forEach((e, index) => {

        e.addEventListener('click', (e) => {
        if(gameStart === true) {
        if(matrix[index - 8] === '') {
        let buf2 = matrix[index - 8];
        matrix[index - 8] = matrix[index];
        matrix[index] = buf2;
        getClicks()
        render(matrix, plate);
        isWin(matrix, finalTarget);
        playSound();
        
        } else if(matrix[index + 8]===''){
        
        let buf2 = matrix[index + 8];
        matrix[index + 8] = matrix[index];
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
}
//Результаты
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
  result.size = size;
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
  result.sort((a, b) => a.clicks > b.clicks);

  let container = document.createElement('div');
  container.classList.add('popup__container');
  gameContainer.appendChild(container);

  let resContainer = document.createElement('div');
  resContainer.classList.add('res__container');
  container.appendChild(resContainer);


  let title = document.createElement('h2');
  title.classList.add('res__title');
  resContainer.appendChild(title);
  title.textContent = 'Таблица результатов';

  if(result !== null) {
    result.forEach((e, index) => {
      let row = document.createElement('div');
      row.classList.add('row__style');
      resContainer.appendChild(row);
      row.textContent = `Кликов ${result[index].clicks}. Время ${result[index].minute}:${result[index].seconds}. Размер ${result[index].size}`
  
    })
  
    let node = document.querySelector('.popup__container');
    node.addEventListener('click', e =>{
      node.remove();
    })
  } else {


    let row = document.createElement('div');
    row.classList.add('row__style');
    resContainer.appendChild(row);
    row.textContent = 'Таблица пустая'

    let node = document.querySelector('.popup__container');
    node.addEventListener('click', e =>{
      node.remove();
    })
    
  }
})

const mutedButton = document.querySelector('.muted');

mutedButton.addEventListener('click', e => {
  if(mutedSound === true) {
    mutedSound = false;
    mutedButton.textContent = 'Muted';
  } else {
    mutedSound = true;
    mutedButton.textContent = 'UnMuted';
  }
})
