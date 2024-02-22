const user = {};
const form = document.querySelector('.login-form');

const submitBtn = form.lastElementChild;

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    let formInputs = Array.from(e.target.elements).filter(el => el.nodeName === 'INPUT');
    const NUMBER_OF_INPUTS = formInputs.length;

    // Filter out empty fields
    formInputs = formInputs.filter(input => input.value);

    // Check if any input field is empty => alert
    if (formInputs.length !== NUMBER_OF_INPUTS) alert('All form fields must be filled in');
    else {
        formInputs.forEach(input => {
            // Adding properties to user object
            user[input.name] = input.value.trim();
        });
        console.log(user);

        e.target.reset();
    }
}
