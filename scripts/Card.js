import {openPopup, closePopup, closeByEscape} from './Popup.js';
import {popupElementPhoto} from './utils.js';
export default class Card {
    constructor (name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const cardPicture = document.querySelector('#element__template').content.querySelector('.element').cloneNode(true);
      return cardPicture;
    }
  
    _handleOpenPictures() {
      const popupPhoto = document.querySelector('.popup__photo');
      const popupTitle = popupElementPhoto.querySelector('.popup__title');
      popupPhoto.src = this._link;
      popupPhoto.alt = this._name;
      popupTitle.textContent = this._name;
  
      openPopup(popupElementPhoto);
    }
  
    _handleLikeButton() {
      this._likeButton.classList.toggle('element__like_active');
    }
  
    _handleDeleteButton() {}
  
    _setEventListener() {
      this._cardPhoto.addEventListener('click', () => {
        this._handleOpenPictures();
      });
  
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