const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__element_field_error',
    errorClass: 'popup__error_visible'
  };

  function disableSubmit(evt) {
    evt.preventDefault();
  }

  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach(function(form) {
        form.addEventListener('submit', disableSubmit);

        addInputListener(form, config);
    });
  }

function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorMessage = document.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
        input.classList.remove(config.inputErrorClass);
        errorMessage.textContent = '';
    } else {
        input.classList.add(config.inputErrorClass);
        errorMessage.textContent = input.validationMessage;
    }
}

function addInputListener(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    inputList.forEach(function(item) {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config);
        });
    });
}

enableValidation(validationConfig);