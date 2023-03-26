export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    }
    
    //функция предотвращение обновления
    _disableSubmit(evt) {
        evt.preventDefault();
    }

    //функция отображения ошибки
    _handleFormInput(event) {
        this._input = event.target;
        const inputId = this._input.id;
        const errorMessage = document.querySelector(`#${inputId}-error`);
    
        if (this._input.validity.valid) {
            this._input.classList.remove(this._config.inputErrorClass);
            errorMessage.textContent = '';
        } else {
            this._input.classList.add(this._config.inputErrorClass);
            errorMessage.textContent = this._input.validationMessage;
        }
    }

    //функция активности кнопки 
    _toggleButtonState () {
        const formValid = this._form.checkValidity();
        this._buttonElement.disabled = !formValid;
        this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !formValid);
    }
    
    //функция искать все инпуты в форме 
    _addInputListeners() {
        this._form.addEventListener('submit', this._disableSubmit);

        this._form.addEventListener('input', () => {
            this._toggleButtonState ();
        });

        this._form.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState ();
              }, 0);
        });

        this._inputList.forEach((item) => {
            item.addEventListener('input', (event) => { //обработчик инпута
                this._handleFormInput(event);
            });
        });
    }

    //активация валидации на форме 
    enableValidation() {
        this._addInputListeners();

        this._toggleButtonState ();
    }
}