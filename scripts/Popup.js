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