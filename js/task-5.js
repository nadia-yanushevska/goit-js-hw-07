function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', colorGenerator);

function colorGenerator(e) {
    const newColor = getRandomHexColor();

    const body = e.target.parentElement.parentElement; // document.body
    const colorDesc = e.target.previousElementSibling.firstElementChild; //document.querySelector('.color');

    body.style.backgroundColor = newColor;
    colorDesc.textContent = newColor;
}
