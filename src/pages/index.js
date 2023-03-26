import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {
  popupOpenElementEdit,
  profileName,
  profileJob,
  popupOpenElementAdd,
  titleInput,
  linkInput,
  initialCards,
  cardTemplate,
  cardsContainer,
  validationConfig,
  popupFormEdit,
  popupFormAdd
} from '../utils/constants.js';

import '../pages/index.css';

//создание попапа для редактирования профиля
const popupWithFormEdit = new PopupWithForm({
  popupSelector: '.popup_edit', 
  handleFormSubmit: (formData) => {
      userInfo.setUserInfo(formData);
  }
});
const userInfo = new UserInfo({
    name: profileName,
    job: profileJob
});

// открытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    popupWithFormEdit.open();
    popupWithFormEdit.setInputValues(userInfo.getUserInfo());
});
popupWithFormEdit.setEventListeners();

//создание попапа для добавления фото
const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add', 
  handleFormSubmit: () => {
      const card = {name: titleInput.value, link: linkInput.value};
      renderCard(card);
  }
});

//обработчик открытия попапа для добавления фото
popupOpenElementAdd.addEventListener('click', function() {
  popupWithFormAdd.open();
});
popupWithFormAdd.setEventListeners();

//рендер карточек
const renderCard = (item) => {
    const card = new Card({
        data:item,
        handleCardClick: (event) => {
            const popupTypePhoto = new PopupWithImage('.popup_open-photo');
            popupTypePhoto.open(event);
            popupTypePhoto.setEventListeners();
        }
    }, cardTemplate);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

const section = new Section({
    items: initialCards,
    renderer: renderCard}, cardsContainer);

section.renderItems();

//валидация формы
  const validateFormEdit = new FormValidator(validationConfig, popupFormEdit);
  const validateFormAdd = new FormValidator(validationConfig, popupFormAdd);

  validateFormEdit.enableValidation();
  validateFormAdd.enableValidation();