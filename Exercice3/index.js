// Créez votre fonction ici
function calculateAverage(numbers) {
    // Vérifie si l'entrée est un tableau valide et si le tableau n'est pas vide
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 'No numbers to calculate average';
    }
    
    // Calcule la somme des nombres dans le tableau
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    
    // Retourne la moyenne
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // retourne 'No numbers to calculate average'

export default calculateAverage