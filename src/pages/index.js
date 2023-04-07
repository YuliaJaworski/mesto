import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import {
  popupOpenElementEdit,
  profileName,
  profileJob,
  popupOpenElementAdd,
  initialCards,
  cardTemplate,
  cardsContainer,
  validationConfig,
  popupFormEdit,
  popupFormAdd,
  userAvatar
} from '../utils/constants.js';
import Api from '../components/Api.js';

import '../pages/index.css';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    'content-type': 'application/json',
    authorization: 'c26594ca-8d0e-4994-82bd-fba2c3fd8012'
  }
})

//создание попапа для редактирования профиля
const popupWithFormEdit = new PopupWithForm({
  popupSelector: '.popup_edit', 
  handleFormSubmit: (data) => {
      userInfo.saveUserInfo(data);
  }
});
const userInfo = new UserInfo({
    name: profileName,
    job: profileJob,
    api: api,
    userPhoto: userAvatar
});

// открытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    popupWithFormEdit.open();
    popupWithFormEdit.setInputValues(userInfo.getUserInfo());
});
popupWithFormEdit.setEventListeners();

//создать попап для подтверждения действия(удалить карточку)
const popupWithSubmit = new PopupWithSubmit('.popup_delete-photo');
popupWithSubmit.setEventListeners();

const popupTypePhoto = new PopupWithImage('.popup_open-photo');
popupTypePhoto.setEventListeners();


//загрузить карточки с сервера
const cardsApi = api.getAllCards();

cardsApi.then((data) => {
  console.log(data);
  //рендер карточек
  const renderCard = (item) => {
    const card = new Card({
        data:item,
        handleCardClick: (event) => {
            popupTypePhoto.open(event);
        },
        handleDeleteIcon: () => {
          popupWithSubmit.open();
          popupWithSubmit.setSubmitAction(() => {
            api.deleteCard(card.getId())
              .then(() => {
                card.deleteCard();
                popupWithSubmit.close();
              })
              .catch(err => console.log(err))
          })
        }
    }, cardTemplate);
    const cardElement = card.generateCard();
    section.addItem(cardElement);
  }

  const section = new Section({
    items: data.map((item) => ({name: item.name, link: item.link, id: item._id})),
    renderer: renderCard}, cardsContainer);

  section.renderItems();

  //создание попапа для добавления фото
  const popupWithFormAdd = new PopupWithForm({
    popupSelector: '.popup_add', 
    handleFormSubmit: (item) => {
      api.addNewCard(item.title, item.link)
        .then((data) => {
          const card = {name: data.name, link: data.link, id: data._id};
          renderCard(card);
        })
        .catch((err) => console.log(err))
    }
  });

  //обработчик открытия попап для добавления фото
  popupOpenElementAdd.addEventListener('click', function() {
    popupWithFormAdd.open();
  });
  popupWithFormAdd.setEventListeners();
});

//загрузить информацию о пользователе с сервера
userInfo.uploadUserData();

//валидация формы
  const validateFormEdit = new FormValidator(validationConfig, popupFormEdit);
  const validateFormAdd = new FormValidator(validationConfig, popupFormAdd);

  validateFormEdit.enableValidation();
  validateFormAdd.enableValidation();