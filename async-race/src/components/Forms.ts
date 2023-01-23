export const forms = (): string =>
  `<div class="cars_cards-buttons">
  <h2>post</h2>
  <form action="" class="car-post-container">
    <input type="text" name="" id="text" placeholder="Car name">
    <input type="color" name="car-color-post" id="color">
    <label for="car-color-post">Color</label>
    <input type="submit" value="submit">
  </form>
  <h2>patch</h2>
  <form action="" class="car-put-container">
    <input type="text" name="" id="text" placeholder="Car name">
    <input type="color" name="car-color-patch" id="color">
    <label for="car-color-patch">Color</label>
    <input type="submit" value="submit">
  </form>
</div>`;
