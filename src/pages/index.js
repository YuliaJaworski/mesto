import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

import '../pages/index.css';

const popupElementEdit = document.querySelector('.popup_edit');
const popupCloseElementEdit = popupElementEdit.querySelector('.popup__close_button_edit');
const popupOpenElementEdit = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElementEdit = document.querySelector('.popup__form_edit');
const nameInput = formElementEdit.querySelector('.popup__element_field_name');
const jobInput = formElementEdit.querySelector('.popup__element_field_job');

//
const popupTypeEdit = new Popup(popupElementEdit);
const userInfo = new UserInfo({
    name: profileName,
    job: profileJob
});

// открытие и закрытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    popupTypeEdit.open();
    popupTypeEdit.setEventListeners(popupCloseElementEdit);
    userInfo.getUserInfo(nameInput, jobInput);
});

const popupWithFormEdit = new PopupWithForm({
    popupSelector: popupElementEdit, 
    handleFormSubmit: () => {
        userInfo.setUserInfo(nameInput, jobInput);
    }
});
popupWithFormEdit.setEventListeners(popupCloseElementEdit);

// переменные для добавления фото
const popupElementAdd = document.querySelector('.popup_add');
const popupCloseElementAdd = popupElementAdd.querySelector('.popup__close_button_add');
const popupOpenElementAdd = document.querySelector('.profile__add-button');
const formElementAdd = popupElementAdd.querySelector('.popup__form_add');
const titleInput = formElementAdd.querySelector('.popup__element_field_title');
const linkInput = formElementAdd.querySelector('.popup__element_field_link');

const popupTypeAdd = new Popup(popupElementAdd);

//создание блока для добавления фото
popupOpenElementAdd.addEventListener('click', function() {
    popupTypeAdd.open();
    popupTypeAdd.setEventListeners(popupCloseElementAdd);
});

const popupWithFormAdd = new PopupWithForm({
    popupSelector: popupElementAdd, 
    handleFormSubmit: () => {
        const card = {name: titleInput.value, link: linkInput.value};
        renderCard(card);
    }
});
popupWithFormAdd.setEventListeners(popupCloseElementAdd);

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
const popupElementPhoto = document.querySelector('.popup_open-photo');

//рендер карточек
const renderCard = (item) => {
    const card = new Card({
        data:item,
        handleCardClick: (event) => {
            const popupTypePhoto = new PopupWithImage(popupElementPhoto);
            popupTypePhoto.open(event);
        }
    });
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

const section = new Section({
    items: initialCards,
    renderer: renderCard}, cardsContainer);

section.renderItems();

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
