import throttle from 'lodash.throttle';


const selectForm = document.querySelector('.feedback-form');
const email = selectForm.querySelector('input');
const message = selectForm.querySelector('textarea');


selectForm.addEventListener("input", throttle(saveMessage, 500));
selectForm.addEventListener('submit', onSubmit);

let dataUserInfo = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

onReload()

function saveMessage(event) {
    dataUserInfo = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(dataUserInfo));
}

function onSubmit(event) {
    event.preventDefault();
    console.log(dataUserInfo);

    localStorage.removeItem('feedback-form-state');
    selectForm.reset();
    dataUserInfo = {};
}

function onReload() {
    if (dataUserInfo) {
        email.value = dataUserInfo.email || '';
        message.value = dataUserInfo.message || '';
    }
}


