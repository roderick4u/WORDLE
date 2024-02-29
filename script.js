// Seleccionar elementos del DOM
const guess_word = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const letterContainers = document.getElementById("correct-letters");
const buttonReset = document.getElementById("reset-button");
const buttonGiveUp = document.getElementById("give-up-button");

// Definir variables
let intentos = 6;
let wordAPI = "APPLE"; // Palabra aleatoria (sin el uso de la API)
let correctLetters = 0;

// Función para reiniciar el juego
buttonReset.addEventListener("click", () => {
    location.reload();
});

// Función para rendirse y mostrar la palabra
buttonGiveUp.addEventListener("click", () => { 
    alert("La palabra era: " + wordAPI);
});

// Función para verificar la conjetura del usuario
button.addEventListener("click", checkGuess);

function checkGuess() {
    // Verificar si se han agotado los intentos
    if (intentos === 0) {
        alert("Perdiste");
        return;
    }

    // Verificar si el usuario ha adivinado todas las letras
    verification(correctLetters);

    // Obtener la conjetura del usuario
    let word = guess_word.value.toUpperCase();
    let arrayWord = word.split('');
    let arrayDictionaryWord = wordAPI.split('');

    // Verificar si la palabra tiene la longitud correcta
    if (word.length !== 5) {
        alert("La palabra debe tener 5 letras");
        return;
    }

    // Comparar letras
    for (let i = 0; i < arrayDictionaryWord.length; i++) {
        const letterContainer = document.createElement("div");
        letterContainer.classList.add("letter-container");

        if (arrayWord[i] === arrayDictionaryWord[i]) {
            letterContainer.classList.add("correct");
            correctLetters++;
        } else if (arrayDictionaryWord.includes(arrayWord[i])) {
            letterContainer.classList.add("parcialCorrect");
        } else {
            letterContainer.classList.add("incorrect");
        }

        letterContainer.innerHTML = arrayWord[i];
        letterContainers.appendChild(letterContainer);
    }

    // Agregar salto de línea después de mostrar las letras
    letterContainers.innerHTML += "<br>";

    // Reducir el contador de intentos
    intentos--;

    // Verificar si se han adivinado todas las letras
    verification(correctLetters);
}

// Función para verificar si se han adivinado todas las letras
function verification(correctLetters) {
    if (correctLetters === 5) {
        alert("Ganaste");
        return;
    }
}
