console.log('Привет, мир!');
const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__close');
const popupOpenElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup__opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup__opened');
}

popupOpenElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');

function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);