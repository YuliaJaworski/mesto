const popupElementEdit = document.querySelector('.popup_edit');
const popupCloseElementEdit = popupElementEdit.querySelector('.popup__close_button_edit');
const popupOpenElementEdit = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElementEdit = document.querySelector('.popup__form_edit');
const nameInput = formElementEdit.querySelector('.popup__element_field_name');
const jobInput = formElementEdit.querySelector('.popup__element_field_job');

//открытие popup
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_opened');
}

//закрытие popup
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_opened');
}

//закрыть popup нажатием клавиши est
function keyHandlerEst(evt, popupElement) {
    if (evt.keyCode === 27) {
        closePopup(popupElement);
    }
}

// открытие и закрытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    openPopup(popupElementEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupCloseElementEdit.addEventListener('click', function() {
    closePopup(popupElementEdit);
});

//обработчик закрытия popup для редактирования аккаунта клавишей est
document.addEventListener('keydown', (evt) => {
    keyHandlerEst(evt, popupElementEdit);
});

//обработчик закрытия popup для добавления фото клавишей est
document.addEventListener('keydown', (evt) => {
    keyHandlerEst(evt, popupElementAdd);
});

//обработчик закрытия popup для просмотра фото клавишей est
document.addEventListener('keydown', (evt) => {
    keyHandlerEst(evt, popupElementPhoto);
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
    const сard = {name: titleInput.value, link: linkInput.value};
    renderCard(сard);
    titleInput.value = '';
    linkInput.value = '';
    closePopup(popupElementAdd);
};

formElementAdd.addEventListener('submit', handleCardFormSubmit);

//переменные для просмотра фото

const popupElementPhoto = document.querySelector('.popup_open-photo');
const popupPhoto = popupElementPhoto.querySelector('.popup__photo');
const popupCloseElementPhoto = popupElementPhoto.querySelector('.popup__close_button_photo');
const popupTitle = popupElementPhoto.querySelector('.popup__title');

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
 

// создание элементов массива
const createCard = (card) => {
  const cardPicture = cardContent.cloneNode(true);

  const btnDelete = cardPicture.querySelector('.element__delete');

  const cardPhoto = cardPicture.querySelector('.element__photo');
  cardPhoto.src = card.link;
  cardPhoto.alt = card.name;

  const cardName = cardPicture.querySelector('.element__name');
  cardName.textContent = card.name;

  const cardLike = cardPicture.querySelector('.element__like');
  
  //удалить фото
  btnDelete.addEventListener('click', () => {
    cardPicture.remove();
  })

  //открытие popup для просмотра фото
  cardPhoto.addEventListener('click', (evt) => {
    evt.preventDefault();

    popupPhoto.src = cardPhoto.src;
    popupPhoto.alt = cardName.textContent;
    popupTitle.textContent = cardName.textContent;

    openPopup(popupElementPhoto);
  })

  //поставить лайк
  cardLike.addEventListener('click', () => {
    cardLike.classList.toggle('element__like_active');
    cardLike.classList.toggle('element__like');
  });

  return cardPicture;
};

const renderCard = (card) => {
    cardsContainer.prepend(createCard(card));
};

initialCards.forEach((item) => {
    renderCard(item);
});