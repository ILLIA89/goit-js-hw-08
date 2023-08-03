import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');


form.addEventListener(
  'input',
  throttle(e => {
    // Об'єкт з полями email і message, у яких зберігаються поточні значення полів форми
    const objectToSave = { email: emailInput.value, message: messageTextarea.value };
    // Записування у локальне сховище об'єкта з полями.
    // JSON.stringify - конвертування JS-значень у формат строки JSON.
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);




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

form.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();
    if (emailInput.value === '' || messageTextarea.value === '') {
        return alert('Заповніть всі поля!');
    }

    console.log({ email: emailInput.value, message: messageTextarea.value });
        clearForm();
}


function clearForm () {

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
