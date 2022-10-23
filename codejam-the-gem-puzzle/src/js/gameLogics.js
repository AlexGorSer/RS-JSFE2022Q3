
import soundClick from '../sound/menu-bleep-rnc.mp3';
import soundMenu from '../sound/03-cutman-stage.mp3';

new Audio(soundMenu).play();

const game = document.querySelector('.game__container');


// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 0]
// ]
let matrix = [1, 2, 3, 4,
              5, 6, 7, 8,
              9, 10, 11, 12,
              13, 14, 15,
            ];
matrix.sort(() => Math.random() - 0.2);
matrix.push('');

let finalTarget = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];

// function createGame(arr){
//   for(let i= 0; i < arr.length; i++){

//     for(let j= 0; j < arr[i].length; j++) {
  
//       let puz = document.createElement('div');
//       puz.classList.add('plate__style');
//       puz.textContent = arr[i][j];
//       game.appendChild(puz);
      
  
//     }
  
//   }
// }
// createGame(matrix);

function isWin(matrix, final){
  let one = JSON.stringify(matrix);
  let two = JSON.stringify(final);
  if(one === two) {
    alert('Молодец, еще разок?')
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
    new Audio(soundClick).play();
    
    if(matrix[index - 4] === '') {
      let buf2 = matrix[index - 4];
      matrix[index - 4] = matrix[index];
      matrix[index] = buf2;
      render(matrix, plate);
      isWin(matrix, finalTarget);


    } else if(matrix[index + 4]===''){

      let buf2 = matrix[index + 4];
      matrix[index + 4] = matrix[index];
      matrix[index] = buf2;
      render(matrix, plate);
      isWin(matrix, finalTarget); 

    }else if(matrix[index + 1]===''){
      let buf2 = matrix[index + 1];
      matrix[index + 1] = matrix[index];
      matrix[index] = buf2;
      render(matrix, plate);
      isWin(matrix, finalTarget);


    }else if(matrix[index - 1]===''){
      let buf2 = matrix[index - 1];
      matrix[index - 1] = matrix[index];
      matrix[index] = buf2;
      render(matrix, plate);
      isWin(matrix, finalTarget);


    } else {
      console.log(false)
    }
  })
})

// function animation(target) {
//   target.addEventListener('animationend', e => {
//     target.classList.remove('moveBot');
//   })
// }