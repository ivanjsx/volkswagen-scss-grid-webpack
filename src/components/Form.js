export default class Form {
    constructor(
        {
            name,
            submitButtonSelector,
            submitHandler
        }
    ) {
        this._form = document.forms[name];
        this._submitHandler = submitHandler;
        this._submitButton = this._form.querySelector(submitButtonSelector);
    };

    setProcessingText(value) {
        this._submitButtonProcessingText = value;
    };

    setSuccessText(value) {
        this._submitButtonSuccessText = value;
    };

    setErrorText(value) {
        this._submitButtonErrorText = value;
    };    

    setEventListeners() {
        this._form.addEventListener(
            "submit", event => {
                event.preventDefault();
                this._submitButton.textContent = this._submitButtonProcessingText;
                this._submitHandler(
                    event
                ).then(
                    data => {
                        this._submitButton.textContent = this._submitButtonSuccessText;
                        this._form.reset();
                    }
                ).catch(
                    error => {
                        this._submitButton.textContent = this._submitButtonErrorText;
                        console.log(error);
                    }
                );
            }
        );
    };
};
