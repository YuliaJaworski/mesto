import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popup.querySelector('.popup__photo');
        this._popupTitle = this._popup.querySelector('.popup__title');
    }

    open(item) {
        //вызвать родительский метод
        super.open();
        //добавить изображение
        this._popupPhoto.src = item.link;
        this._popupPhoto.alt = item.name;
        this._popupTitle.textContent = item.name;
    }
}