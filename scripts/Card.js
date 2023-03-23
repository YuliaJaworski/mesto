export default class Card {
    constructor ({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const cardPicture = document.querySelector('#element__template').content.querySelector('.element').cloneNode(true);
      return cardPicture;
    }
  
    _handleLikeButton() {
      this._likeButton.classList.toggle('element__like_active');
    }
  
    _setEventListener() {
      this._cardPhoto.addEventListener('click', this._handleCardClick);
  
      this._element.querySelector('.element__delete').addEventListener('click', () => {
        this._element.remove();
      });
  
      this._likeButton.addEventListener('click', () => {
        this._handleLikeButton();
      });
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.element__like');
      this._cardPhoto = this._element.querySelector('.element__photo');
      this._setEventListener();
  
      this._cardPhoto.src = this._link;
      this._element.querySelector('.element__name').textContent = this._name;
      this._cardPhoto.alt = this._name;
  
      return this._element;
    }
  }