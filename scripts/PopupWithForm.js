import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( {popupSelector, handleFormSubmit} ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        const inputValues = {};
        this._inputs = Array.from(this._form.querySelectorAll('.popup__element'));
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setEventListeners(btnClose) {
        super.setEventListeners(btnClose);
        //добавить обработчик сабмита формы
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this._getInputValues();
            this.close(this._popupSelector);
        });
    }

    close() {
        super.close(this._popupSelector);
        //форма сбрасывается
        this._form.reset();
    }
}