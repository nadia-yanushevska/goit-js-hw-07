/**
   <div class="widget">
      <p>Background color: <span class="color">-</span></p>
      <button type="button" class="change-color">Change color</button>
    </div>
 */

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', colorGenerator);

function colorGenerator(e) {
    const newColor = getRandomHexColor();

    const body = e.target.parentElement.parentElement;
    const colorDesc = e.target.previousElementSibling.firstElementChild;

    body.style.backgroundColor = newColor;
    colorDesc.textContent = newColor;
}
