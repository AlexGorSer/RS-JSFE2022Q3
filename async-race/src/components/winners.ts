import carsStorage from "../carsStorage/carsStorage";
import { carSVG } from "./carSVG";

export const winnersModal = () => `
<div class="winners_modal-container">
<h2>Winners: ${carsStorage.winnersCount}</h2>
<p>Page: ${1}</p>
<table>
  <tr>
    <th>Number</th>
    <th>Car</th>
    <th>Model</th>
    <th>byWin</th>
    <th>order</th>
  </tr>
  ${carsStorage.winners.map(
    (elem) => `
  <tr>
  <td>${elem.id}</td>
  <td>${carSVG(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    carsStorage.cars.find((e) => e.id === elem.id)!.color,
    elem.id
  )}</td>
  <td>${carsStorage.cars.find((e) => e.id === elem.id)?.name}</td>
  <td>${elem.wins}</td>
  <td>${elem.time}</td>
  </tr>`
  )}
</table>
</div>
`;
