let currentInput = ''; // Stocke l'expression complète

function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Empêcher deux opérateurs consécutifs
    if (isNaN(value) && isNaN(currentInput.slice(-1))) {
        return;
    }

    currentInput += value;
    display.value = currentInput;
}

function calculateResult() {
    if (currentInput === '' || isNaN(currentInput.slice(-1))) {
        return; // Empêche les calculs invalides
    }

    try {
        let result = eval(currentInput); // Évaluer l'expression

        // Vérifier si l'opération est une division par zéro
        if (currentInput.includes('/0')) {
            document.getElementById('display').value = 'Division by zero is not allowed';
            currentInput = ''; // Réinitialiser l'entrée
        } else {
            document.getElementById('display').value = result; // Afficher le résultat
            currentInput = result.toString();
        }
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}