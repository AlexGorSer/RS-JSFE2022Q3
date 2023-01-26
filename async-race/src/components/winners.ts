import carsStorage from "../carsStorage/carsStorage";
import { carSVG } from "./carSVG";

export const winnersModal = async () => `
<div class="winners_modal-container">
<button class="close-modal-button"> Close </button>
<h2>Winners: ${carsStorage.winnersCount}</h2>
<p>Page: ${1}</p>
<button class="modal-pref"><=</button>
<button class="modal-next">=></button>
<table>
  <tr>
    <th>Number</th>
    <th>Car</th>
    <th>Model</th>
    <th>byWin</th>
    <th>order</th>
  </tr>
  ${carsStorage.winners.map(
    (elem, index) => `
  <tr>
  <td>${index + 1}</td>
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
</table>
</div>
`;
