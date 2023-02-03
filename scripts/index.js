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

// открытие и закрытие popup редактирование профиля
popupOpenElementEdit.addEventListener('click', function() {
    openPopup(popupElementEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupCloseElementEdit.addEventListener('click', function() {
    closePopup(popupElementEdit);
});

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

// создание элементов массива
const createCard = (card) => {
  const cardPicture = cardTemplate.content.querySelector('.element').cloneNode(true);
  const deleteBtn = cardPicture.querySelector('.element__delete');

  const cardPhoto = cardPicture.querySelector('.element__photo');
  cardPhoto.src = card.link;
  cardPhoto.alt = card.name;

  const cardName = cardPicture.querySelector('.element__name');
  cardName.textContent = card.name;

  const cardLike = cardPicture.querySelector('.element__like');
  
  //удалить фото
  deleteBtn.addEventListener('click', () => {
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