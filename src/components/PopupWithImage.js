import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(event) {
        //вызвать родительский метод
        super.open();
        //добавить изображение
        const popupPhoto = document.querySelector('.popup__photo');
        const popupTitle = document.querySelector('.popup__title');
        popupPhoto.src = event.target.src;
        popupPhoto.alt = event.target.alt;
        popupTitle.textContent = event.target.alt;

        const popupCloseElementPhoto = document.querySelector('.popup__close_button_photo');
        super.setEventListeners(popupCloseElementPhoto);
    }
}