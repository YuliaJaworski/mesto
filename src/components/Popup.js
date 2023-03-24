export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            this._handleEstClose(evt);
        });
    }

    close(popup) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEstClose(evt);
        });
    }

    //закрыть попап клавишей Est
    _handleEstClose(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            this.close(openedPopup);
        }
    }

    //добавить слушатель клика иконке закрытия
    //закрыть модальное окно при клике на затемненную часть
    setEventListeners(btnClose) {
        btnClose.addEventListener('click', () => {
            this.close(this._popupSelector);
        });

        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target === this._popupSelector) {
                this.close(this._popupSelector);
            }
        })
    }
}

//открытие popup
const openPopup = function(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

//закрытие popup
const closePopup = function(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

//закрыть popup нажатием клавиши escape
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

export {openPopup, closePopup, closeByEscape};