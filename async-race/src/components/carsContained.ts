export const carsCard = (carName: string, carSVG: string, id: number): string =>
  `<div class="car-card" id="${id}">
<div class="buttons-car">
  <h2 class="cars-card-name">${carName}</h2>
  <button class="cars-card-select" id="${id}">select</button>
  <button class="cars-card-remove" id="${id}">remove</button>
  <button class="cars-card-start" id="${id}">start</button>
  <button class="cars-card-stope" id="${id}">stope</button>
</div>
<div class="svg-car-container">
${carSVG}
</div>
</div>`;
