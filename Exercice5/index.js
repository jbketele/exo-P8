document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let firstInvalidField = null;

        // Réinitialisation des erreurs
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

        // Validation du champ Nom
        const nameInput = document.getElementById("name");
        const nameError = document.getElementById("name-error");

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Le nom est requis.";
            isValid = false;
            firstInvalidField = firstInvalidField || nameInput;
        }

        // Validation du champ Email
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
            isValid = false;
            firstInvalidField = firstInvalidField || emailInput;
        }

        // Empêcher l'envoi si le formulaire n'est pas valide
        if (!isValid) {
            event.preventDefault();
            firstInvalidField.focus();
        }
    });
});