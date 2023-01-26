import carsStorage from "../carsStorage/carsStorage";
import { carSVG } from "./carSVG";

export const winnersModal = async (table: string) => `
<div class="winners_modal-container">
<button class="close-modal-button"> Close </button>
<h2>Winners: ${carsStorage.winnersCount}</h2>
<p class="page">Page: ${carsStorage.winnersPages}</p>
<button class="modal-pref"><=</button>
<button class="modal-next">=></button>
<div class="table-container">
${table}
</div>
</div>
`;

export const tableModal = (): string => `<table>
<tr>
  <th>Number</th>
  <th>Car</th>
  <th>Model</th>
  <th class="win">byWin</th>
  <th class="time">time</th>
</tr>
${carsStorage.winners.map(
  (elem, index) => `
<tr>
<td>${
    carsStorage.winnersPages - 1 === 0
      ? index + 1
      : carsStorage.winnersPages - 1 + `${index + 1}`
  }</td>
<td>${carSVG(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    carsStorage.allCars.find((e) => e.id === elem.id)!.color,
    elem.id
  )}</td>
<td>${carsStorage.allCars.find((e) => e.id === elem.id)?.name}</td>
<td>${elem.wins}</td>
<td>${elem.time}s</td>
</tr>`
)}
</table>`;
