import birdsData from "./birds";

const modalGallery = document.querySelector('.modal-body');

function createGallery() {

    for(let j = 0; j < birdsData.length; j++) {
      for(let i = 0; i < birdsData[j].length; i++) {
        
    modalGallery.innerHTML += `<div> <div class="card p-3 songbird__card-container">
    <img src="${birdsData[j][i].image}" class="card-img-top songbird__card-img bird-img" alt="bird">
    <ul class="list-group list-group-flush">
      <li class="list-group-item cards bird-name">${birdsData[j][i].name}</li>
      <li class="list-group-item cards bird-species">${birdsData[j][i].species}</li>
      <li class="list-group-item songbird__audio-container">
        <div class="player-container">
        <audio class="songbird__random-audio bird-audio" src="${birdsData[j][i].audio}" controls></audio>
          </div>
        </div>
    
      </li>
      <div class="card-body">
        <p class="card-text card-text bird-description">${birdsData[j][i].description}</p>
      </div>
    </ul></div></div>`;
    }
  }
}
window.addEventListener('load', e => {
  createGallery()
})