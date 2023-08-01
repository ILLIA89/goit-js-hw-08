import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');


let data = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);


// додавання значення інпуту в локальне сховище
function onInput(e) {
    data[e.target.name] = e.target.value

    localStorage.setItem(LOCALSTORAGE_KEY,
        JSON.stringify({ email: data.email, message: data.message }));
}

// Метод load який абстрагує повторюваний код перевірки помилок
const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        // перевіряю чи данні не порожні якщо так повертаю undefined
        if (!serializedState) return undefined;

        return JSON.parse(serializedState)
    } catch (error) {
        // повертається повідомлення підчас помилки
        console.error('Get state error: ', error.message);
        return undefined;
    }
};


function onSubmit (e) {
    e.preventDefault();
    if (emailInput.value === '' || messageTextarea.value === '') {
        return alert('Заповніть всі поля!');
    }

    console.log({ email: emailInput.value, message: messageTextarea.value });
        clearForm();
}


function clearForm () {
    data = {}
    localStorage.removeItem(LOCALSTORAGE_KEY);
    emailInput.value = '';
  messageTextarea.value = '';
}

// перевірка сховища 

//  заповнювати поля данними якщо в сховищі є данні

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
    const { email: storedEmail, message: storedMessage } = storageData;
    emailInput.value = storedEmail;
    messageTextarea.value = storedMessage;
}
