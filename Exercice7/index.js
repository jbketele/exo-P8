function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur
    const decimalValue = document.getElementById('decimalInput').value;

    // Vérifier si la saisie est valide
    if (decimalValue === "" || isNaN(decimalValue) || decimalValue < 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }

    // Convertir le nombre décimal en binaire
    const binaryValue = Number(decimalValue).toString(2);

    // Afficher le résultat dans le div #binaryResult
    document.getElementById('binaryResult').textContent = "Binaire : " + binaryValue;
}