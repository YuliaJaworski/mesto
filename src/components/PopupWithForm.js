import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( {popupSelector, handleFormSubmit} ) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__element'));
        this._submitButton = this._popup.querySelector('.popup__save');
    }

    //собирает данные всех полей формы
    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    //вставляет данные в инпуты
    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }

    rendederLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._submitButton.textContent;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        //добавить обработчик сабмита формы
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.rendederLoading(true);
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        //форма сбрасывается
        this._form.reset();
    }
}