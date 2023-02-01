console.log('Привет, мир!');
const popupElementEdit = document.querySelector('.popup__edit');
const popupCloseElementEdit = popupElementEdit.querySelector('.popup__close_button_edit');
const popupOpenElementEdit = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElementEdit = document.querySelector('.popup__form_edit');
let nameInput = formElementEdit.querySelector('.popup__element_field_name');
let jobInput = formElementEdit.querySelector('.popup__element_field_job');

// открытие и закрытие popup редактирование профиля
const openPopupEdit = function() {
    popupElementEdit.classList.add('popup_opened');

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const closePopup = function(popup) {
    popup.classList.remove('popup_opened');
}

popupOpenElementEdit.addEventListener('click', openPopupEdit);
popupCloseElementEdit.addEventListener('click', function() {
    closePopup(popupElementEdit);
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup (popupElementEdit);
}

formElementEdit.addEventListener('submit', handleFormSubmit);

// открытие и закрытие popup для добавления фото
const popupElementAdd = document.querySelector('.popup__add');
const popupCloseElementAdd = popupElementAdd.querySelector('.popup__close_button_add');
const popupOpenElementAdd = document.querySelector('.profile__add-button');
const formElementAdd = popupElementAdd.querySelector('.popup__form_add');
const titleInput = formElementAdd.querySelector('.popup__element_field_title');
const linkInput = formElementAdd.querySelector('.popup__element_field_link');

const openPopupAdd = function() {
    popupElementAdd.classList.add('popup_opened');
}

popupOpenElementAdd.addEventListener('click', openPopupAdd);
popupCloseElementAdd.addEventListener('click', function() {
    closePopup(popupElementAdd);
});

const addFormSumbmit = (evt) => {
    evt.preventDefault();
    const сard = {name: titleInput.value, link: linkInput.value};
    renderElement(сard);
    titleInput.value = '';
    linkInput.value = '';
    closePopup(popupElementAdd);
};

formElementAdd.addEventListener('submit', addFormSumbmit);

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

const elementTemplate = document.querySelector('#element__template');
const elementsList = document.querySelector('.elements__grid');

const createElement = (card) => {
  const element = document.createElement('li');
  element.classList.add('element');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('element__delete');

  deleteBtn.addEventListener('click', () => {
    element.remove();
  })

  const elementPhoto = document.createElement('img');
  elementPhoto.classList.add('element__photo');
  elementPhoto.src = card.link;

  const elementDescription = document.createElement('div');
  elementDescription.classList.add('element__description');

  const elementName = document.createElement('h2');
  elementName.classList.add('element__name');
  elementName.textContent = card.name;

  const elementLike = document.createElement('button');
  elementLike.classList.add('element__like');

  elementLike.addEventListener('click', () => {
    elementLike.classList.toggle('element__like_active');
    elementLike.classList.toggle('element__like');
  });

  elementDescription.append(elementName, elementLike);

  element.append(elementPhoto, elementDescription, deleteBtn);

  return element;
};

const renderElement = (card) => {
    elementsList.prepend(createElement(card));
};

initialCards.forEach((item) => {
    renderElement(item);
});