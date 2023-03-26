export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        //this._handleEscClose = this._handleEscClose.bind(this);
        this._btnClose = this._popup.querySelector('.popup__close');
        this._handleEstClose = this._handleEstClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEstClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEstClose);
    }

    //закрыть попап клавишей Est
    _handleEstClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    //добавить слушатель клика иконке закрытия
    //закрыть модальное окно при клике на затемненную часть
    setEventListeners() {
        this._btnClose.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', (evt) => {
            if (evt.target === this._popup) {
                this.close();
            }
        });
    }
}