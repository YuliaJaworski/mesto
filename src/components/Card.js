export default class Card {
    constructor ({data, userId, ownerId, handleCardClick, handleDeleteIcon, handleLikeClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._ownerId = ownerId;
        this._userId = userId;
        this._handleDeleteIcon = handleDeleteIcon;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
        this._likes = data.likes;
        this._likeButton = this._element.querySelector('.element__like');
        this._countLikes = this._element.querySelector('.element__count-likes');
    }
  
    _getTemplate() {
      const cardPicture = this._templateSelector.content.querySelector('.element').cloneNode(true);
      return cardPicture;
    }
  
    handleLikeButton() {
      this._likeButton.classList.add('element__like_active');
      return this._countLikes.textContent = Number(this._likes.length) + 1;
    }

    removeLikeButton() {
      this._likeButton.classList.remove('element__like_active');
      return this._countLikes.textContent = Number(this._likes.length);
    }

    isLiked() {
      return this._likeButton.classList.contains('element__like_active');
    }

    _checkLikeStatus() {
      this._likes.forEach(like => {
        if(like._id === this._userId) {
          this._likeButton.classList.add('element__like_active');
        }
      });

      return this._countLikes.textContent = this._likes.length;
    }

    //вернуть id карточки
    getId() {
      return this._id;
    }

    //удалить карточку
    deleteCard() {
      this._element.remove();
    }
  
    _setEventListener() {
      this._cardPhoto.addEventListener('click', this._handleCardClick);

      this._btnDelete = this._element.querySelector('.element__delete');

      //удаление карточки
      if (this._ownerId === this._userId) {
        //отрисовать корзину
        this._btnDelete.classList.add('element__delete_active');
        //добавить обработчик удаления
        this._btnDelete.addEventListener('click', this._handleDeleteIcon);
      }
  
      this._likeButton.addEventListener('click', this._handleLikeClick);
    }
  
    generateCard() {
      this._cardPhoto = this._element.querySelector('.element__photo');
      this._setEventListener();
      this._checkLikeStatus();
  
      this._cardPhoto.src = this._link;
      this._element.querySelector('.element__name').textContent = this._name;
      this._cardPhoto.alt = this._name;
  
      return this._element;
    }
  }