const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
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

        form.addEventListener('input', () => {
            toggleButtonState (form, config);
        })
        toggleButtonState (form, config);

        form.addEventListener('reset', () => {
            setTimeout(() => {
                toggleButtonState (form, config);
              }, 0);
        });
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

function toggleButtonState (form, config) {
    const buttonElement = form.querySelector(config.submitButtonSelector);
    const formValid = form.checkValidity();
    buttonElement.disabled = !formValid;
    buttonElement.classList.toggle(config.inactiveButtonClass, !formValid);
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