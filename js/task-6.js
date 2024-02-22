function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const boxContainer = body.querySelector('#boxes');
const createBtn = body.querySelector('button[data-create]');
const destroyBtn = body.querySelector('button[data-destroy]');

createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', destroyBoxes);

// clears the container
function destroyBoxes() {
    boxContainer.innerHTML = '';
}

// checks if input is valid, then destroys previously created boxes and creates new ones
function onCreateBtn(e) {
    const input = e.target.previousElementSibling;
    const value = Number.parseInt(input.value);
    input.value = '';
    if (value > 100 || value < 1 || isNaN(value)) return;

    destroyBoxes();
    createBoxes(value);
}

// adds div elements to the container
function createBoxes(amount) {
    const boxes = createBoxArray(amount);

    boxes.forEach(box => {
        boxContainer.append(boxElem(box));
    });
}

// creates a div element based on obj
function boxElem(obj) {
    const boxDiv = document.createElement('div');
    boxDiv.style.width = obj.size;
    boxDiv.style.height = obj.size;
    boxDiv.style.backgroundColor = obj.color;
    return boxDiv;
}

// generates an array of objects with size and color properties
function createBoxArray(amount) {
    const arr = [];
    for (let i = 0; i < amount; i++) {
        const size = `${30 + i * 10}px`;
        const obj = {
            size,
            color: getRandomHexColor(),
        };
        arr.push(obj);
    }
    return arr;
}
