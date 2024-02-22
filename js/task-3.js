const body = document.querySelector('body');

const inputElem = body.children['name-input'];
const outputElem = body.querySelector('#name-output');

inputElem.addEventListener('input', eventHandler);

function eventHandler(e) {
    const userName = e.target.value;
    outputElem.textContent = userName || 'Anonymous';
}
