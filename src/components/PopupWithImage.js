import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = document.querySelector('.popup__photo');
        this._popupTitle = document.querySelector('.popup__title');
    }

    open(event) {
        //вызвать родительский метод
        super.open();
        //добавить изображение
        this._popupPhoto.src = event.target.src;
        this._popupPhoto.alt = event.target.alt;
        this._popupTitle.textContent = event.target.alt;
    }
}