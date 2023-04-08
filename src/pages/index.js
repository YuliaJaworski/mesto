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
  cardTemplate,
  cardsContainer,
  validationConfig,
  popupFormEdit,
  popupFormAdd,
  userAvatar,
  popupFormAvatar
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

//создание попап для обновления аватара
const popupWithFormAvatar = new PopupWithForm({
  popupSelector: '.popup_add-avatar',
  handleFormSubmit: (data) => {
    //обновить данные о смене аватара
    const apiNewAvatar = api.addNewUserPhoto(data);
    apiNewAvatar.then((data) => {
      userInfo.saveUserAvatar(data);
      popupWithFormAvatar.close();
    }).catch(err => console.log(err))
      .finally(() => {
        popupWithFormAvatar.rendederLoading(false);
      })
  }
});
popupWithFormAvatar.setEventListeners();

const popupNewAvatar = document.querySelector('.profile__overlay');
popupNewAvatar.addEventListener('click', () => {
  popupWithFormAvatar.open();
})


//создание попапа для редактирования профиля
const popupWithFormEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    //обновить данные о пользователе
    const apiNewUserInfo = api.addNewUserName(data.name, data.job)
    apiNewUserInfo.then((data) => {
      userInfo.saveUserInfo(data);
      popupWithFormEdit.close();
    }).catch((err) => console.log(err))
      .finally(() => {
        popupWithFormEdit.rendederLoading(false);
      });
  }
});
const userInfo = new UserInfo({
  data: {
    name: profileName,
    job: profileJob,
  },
  userPhoto: userAvatar
});

// открытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function () {
  popupWithFormEdit.open();
  popupWithFormEdit.setInputValues(userInfo.getUserInfo());
});
popupWithFormEdit.setEventListeners();

//создать попап для подтверждения действия(удалить карточку)
const popupWithSubmit = new PopupWithSubmit('.popup_delete-photo');
popupWithSubmit.setEventListeners();

const popupTypePhoto = new PopupWithImage('.popup_open-photo');
popupTypePhoto.setEventListeners();

const userId = userInfo.getId();

//рендер карточек
const renderCard = (item) => {
  const card = new Card({
    data: item,
    ownerId: item.owner,
    userId: userId,
    handleCardClick: () => {
      popupTypePhoto.open(item);
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
    },
    handleLikeClick: () => {
      if (card.isLiked()) {
        api.deleteLike(card.getId())
          .then((data) => {
            card.getLikesInfo(data);
            card.removeLikeButton();
          })
          .catch(err => console.log(err))
      } else {
        api.like(card.getId())
          .then((data) => {
            card.getLikesInfo(data);
            card.handleLikeButton();
          })
          .catch(err => console.log(err))
      }
    },
  }, cardTemplate);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
}

const section = new Section({
  renderer: renderCard
}, cardsContainer);

//загрузить данные о пользователе
const apiUserInfo = api.getUserName();
//загрузить карточки с сервера
const cardsApi = api.getAllCards();

Promise.all([cardsApi, apiUserInfo])
  .then(() => {

    //загрузить карточки с сервера
    cardsApi.then((data) => {
      console.log(data);
      section.renderItems(data);
    }).catch(err => console.log(err));


    //загрузить информацию о пользователе с сервера
    apiUserInfo.then((data) => {
      const initialInfo = { name: data.name, about: data.about, id: data._id, avatar: data.avatar };
      userInfo.uploadUserData(initialInfo);
    })
    .catch(err => console.log(err));

  })
  .catch(err => console.log(err));

//создание попапа для добавления фото
const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (item) => {
    api.addNewCard(item.title, item.link)
      .then((data) => {
        const card = { name: data.name, link: data.link, id: data._id, owner: data.owner._id, likes: data.likes };
        renderCard(card);
        popupWithFormAdd.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithFormAdd.rendederLoading(false);
      })
  }
});

//обработчик открытия попап для добавления фото
popupOpenElementAdd.addEventListener('click', function () {
  popupWithFormAdd.open();
});
popupWithFormAdd.setEventListeners();

//валидация формы
const validateFormEdit = new FormValidator(validationConfig, popupFormEdit);
const validateFormAdd = new FormValidator(validationConfig, popupFormAdd);
const validateFormAvatar = new FormValidator(validationConfig, popupFormAvatar);

validateFormEdit.enableValidation();
validateFormAdd.enableValidation();
validateFormAvatar.enableValidation();