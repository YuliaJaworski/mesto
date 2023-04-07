export default class Card {
    constructor ({data, handleCardClick, handleDeleteIcon}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._handleDeleteIcon = handleDeleteIcon;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
        this._element = this._getTemplate();
    }
  
    _getTemplate() {
      const cardPicture = this._templateSelector.content.querySelector('.element').cloneNode(true);
      return cardPicture;
    }
  
    _handleLikeButton() {
      this._likeButton.classList.toggle('element__like_active');
    }

    getId() {
      return this._id;
    }

    deleteCard() {
      this._element.remove();
    }
    // _deleteCard() {
    //   this._api.deleteCard(this._id)
    //     .then(() => {
    //       this._element.remove();
    //     })
    //     .catch((err) => console.log(err))
    // }
  
    _setEventListener() {
      this._cardPhoto.addEventListener('click', this._handleCardClick);
  
      this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteIcon);
  
      this._likeButton.addEventListener('click', () => {
        this._handleLikeButton();
      });
    }
  
    generateCard() {
      this._likeButton = this._element.querySelector('.element__like');
      this._cardPhoto = this._element.querySelector('.element__photo');
      this._setEventListener();
  
      this._cardPhoto.src = this._link;
      this._element.querySelector('.element__name').textContent = this._id;
      this._cardPhoto.alt = this._name;
  
      return this._element;
    }
  }