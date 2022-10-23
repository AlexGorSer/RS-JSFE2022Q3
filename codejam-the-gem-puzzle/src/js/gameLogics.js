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
          matrix.sort(() => Math.random() - 0.2)
          matrix.push(0);

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
function createGame2(arr){
  for(let i= 0; i < arr.length; i++){
    let puz = document.createElement('div');
    puz.classList.add('plate__style');
    puz.textContent = arr[i];
    puz.dataset.id = arr[i];
    game.appendChild(puz);

      if(arr[i] === 0) {
        puz.classList.add('zero__plate');
        // puz.textContent =  '';
      }

      
  }
}
createGame2(matrix);

const plate = document.querySelectorAll('.plate__style');
function render(matrix, plates) {
  plates.forEach(target => {
    target.textContent = '';
  });
  matrix.forEach((e, index) => {
    plate[index].textContent = e;
  })


};


plate.forEach((e, index) => {
  
  e.addEventListener('click', () => {
    if(matrix[index - 4] === 0) {
      let buf2 = matrix[index - 4];
      matrix[index - 4] = matrix[index];
      matrix[index] = buf2;
      console.log(matrix);
      render(matrix, plate);


    } else if(matrix[index + 4]===0){

      let buf2 = matrix[index + 4];
      matrix[index + 4] = matrix[index];
      matrix[index] = buf2;
      console.log(matrix);
      render(matrix, plate);
      

    }else if(matrix[index + 1]===0){
      let buf2 = matrix[index + 1];
      matrix[index + 1] = matrix[index];
      matrix[index] = buf2;
      console.log(matrix);
      render(matrix, plate);


    }else if(matrix[index - 1]===0){
      let buf2 = matrix[index - 1];
      matrix[index - 1] = matrix[index];
      matrix[index] = buf2;
      console.log(matrix);
      render(matrix, plate);


    } else {
      console.log(false)
    }
  })
})