import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';



let data = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);



function onInput(e) {
    data[e.target.name] = data[e.target.value]

    localStorage.setItem(LOCALSTORAGE_KEY,
        JSON.stringify({ email: data.email, message: data.message }));
}
function onSubmit (e) {
    e.preventDefault();
    console.log(data);
    clearForm();
}


function clearForm () {
    data = {}
    localStorage.removeItem(LOCALSTORAGE_KEY);
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    emailInput.value = '';
  messageTextarea.value = '';
}

