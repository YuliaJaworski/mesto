export const popupOpenElementEdit = document.querySelector('.profile__edit-button');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

// переменные для добавления фото
export const popupElementAdd = document.querySelector('.popup_add');
export const popupOpenElementAdd = document.querySelector('.profile__add-button');
export const formElementAdd = popupElementAdd.querySelector('.popup__form_add');

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
export const popupFormAvatar = document.querySelector('#popup__form_add-avatar');

export const userAvatar = document.querySelector('.profile__avatar');
export const popupNewAvatar = document.querySelector('.profile__avatar');