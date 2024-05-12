class FormSubmit {
    construtctor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);

        if (this.form) {
            this.url = this.form.getAttribute("action");
        }

        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const FormObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Sending message..."
    }

    async sendForm(error) {
        try {
            fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
    }

}

const formSubmit = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: <h1 class='success'>Message sent successfully.</h1>,
    error: <h1 class='error'>Message unsent.</h1>
});

formSubmit.init()
