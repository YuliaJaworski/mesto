import Card from './Card.js';
import {openPopup, closePopup, closeByEscape} from './Popup.js';
import FormValidator from './FormValidator.js';
import {popupElementPhoto} from './utils.js';

const popupElementEdit = document.querySelector('.popup_edit');
const popupCloseElementEdit = popupElementEdit.querySelector('.popup__close_button_edit');
const popupOpenElementEdit = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElementEdit = document.querySelector('.popup__form_edit');
const nameInput = formElementEdit.querySelector('.popup__element_field_name');
const jobInput = formElementEdit.querySelector('.popup__element_field_job');

// открытие и закрытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    openPopup(popupElementEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupCloseElementEdit.addEventListener('click', function() {
    closePopup(popupElementEdit);
});

//обработчик закрытия popup для редактирования аккаунта кликом на оверлей
popupElementEdit.addEventListener('click', (evt) => {
    if (evt.target === popupElementEdit) {
        closePopup(popupElementEdit);
    }
})

function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup (popupElementEdit);
}

formElementEdit.addEventListener('submit', handleProfileFormSubmit);

// переменные для добавления фото
const popupElementAdd = document.querySelector('.popup_add');
const popupCloseElementAdd = popupElementAdd.querySelector('.popup__close_button_add');
const popupOpenElementAdd = document.querySelector('.profile__add-button');
const formElementAdd = popupElementAdd.querySelector('.popup__form_add');
const titleInput = formElementAdd.querySelector('.popup__element_field_title');
const linkInput = formElementAdd.querySelector('.popup__element_field_link');

//создание блока для добавления фото
popupOpenElementAdd.addEventListener('click', function() {
    openPopup(popupElementAdd);
});
popupCloseElementAdd.addEventListener('click', function() {
    closePopup(popupElementAdd);
});

//обработчик закрытия popup для добавления фото кликом на оверлей
popupElementAdd.addEventListener('click', (evt) => {
    if (evt.target === popupElementAdd) {
        closePopup(popupElementAdd);
    }
});

const handleCardFormSubmit = (evt) => {
    evt.preventDefault();
    const card = {name: titleInput.value, link: linkInput.value};
    renderCard(card);
    evt.target.reset();
    closePopup(popupElementAdd);
};

formElementAdd.addEventListener('submit', handleCardFormSubmit);

//переменные для просмотра фото

const popupCloseElementPhoto = popupElementPhoto.querySelector('.popup__close_button_photo');

//закрытие popup для просмотра фото
popupCloseElementPhoto.addEventListener('click', () => {
    closePopup(popupElementPhoto);
})

//обработчик закрытия popup для просмотра фото кликом на оверлей
popupElementPhoto.addEventListener('click', (evt) => {
    if (evt.target === popupElementPhoto) {
        closePopup(popupElementPhoto);
    }
});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//переменные для создания массива
const cardTemplate = document.querySelector('#element__template');
const cardsContainer = document.querySelector('.elements__grid');
const cardContent = cardTemplate.content.querySelector('.element');

//отображение карточек
//initialCards.forEach((item) => {
//  const card = new Card(item.name, item.link);
//  const cardElement = card.generateCard();
//  cardsContainer.prepend(cardElement);
//});

const createCard = (item) => {
    const card = new Card(item.name, item.link);
    return card.generateCard();
}

const renderCard = (item) => {
    const card = createCard(item);
    cardsContainer.prepend(card);
}

initialCards.forEach((item) => {
    renderCard(item);
})

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__element_field_error',
    errorClass: 'popup__error_visible'
  };

  const popupFormEdit = document.querySelector('#popup__form_edit');
  const popupFormAdd = document.querySelector('#popup__form_add');
  

  const validateFormEdit = new FormValidator(validationConfig, popupFormEdit);
  const validateFormAdd = new FormValidator(validationConfig, popupFormAdd);

  validateFormEdit.enableValidation();
  validateFormAdd.enableValidation();
