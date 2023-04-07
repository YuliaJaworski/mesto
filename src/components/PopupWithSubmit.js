import Popup from "./Popup"

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submitButton = this._popup.querySelector('.popup__save');
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
      }

    setEventListeners() {
        super.setEventListeners();

        //добавить обработчик сабмита формы
        this._submitButton.addEventListener('click', () => {
            this._handleSubmitCallback();
        });
    }
}