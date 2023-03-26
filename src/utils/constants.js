export const popupOpenElementEdit = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

// переменные для добавления фото
export const popupElementAdd = document.querySelector('.popup_add');
export const popupOpenElementAdd = document.querySelector('.profile__add-button');
export const formElementAdd = popupElementAdd.querySelector('.popup__form_add');
export const titleInput = formElementAdd.querySelector('.popup__element_field_title');
export const linkInput = formElementAdd.querySelector('.popup__element_field_link');

export const initialCards = [
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
export const cardTemplate = document.querySelector('#element__template');
export const cardsContainer = document.querySelector('.elements__grid');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__element_field_error',
    errorClass: 'popup__error_visible'
  };

export const popupFormEdit = document.querySelector('#popup__form_edit');
export const popupFormAdd = document.querySelector('#popup__form_add');