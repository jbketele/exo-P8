document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        let messageParagraph = document.getElementById("message");

        if (!messageParagraph) {
            messageParagraph = document.createElement("p");
            messageParagraph.id = "message";
            document.body.appendChild(messageParagraph);
        }

        messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
    });
});