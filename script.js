const guess_word = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const letterContainers = document.getElementById("correct-letters");
const buttonReset = document.getElementById("reset-button");
const buttonGiveUp = document.getElementById("give-up-button");

let intentos = 6;
let wordAPI = "APPLE"; 
let correctLetters = 0;

buttonReset.addEventListener("click", () => {
    location.reload();
});

buttonGiveUp.addEventListener("click", () => { 
    alert("La palabra era: " + wordAPI);
});

button.addEventListener("click", checkGuess);

function checkGuess() {
    if (intentos === 0) {
        alert("Perdiste");
        return;
    }

    verification(correctLetters);

    let word = guess_word.value.toUpperCase();
    let arrayWord = word.split('');
    let arrayDictionaryWord = wordAPI.split('');


    if (word.length !== 5) {
        alert("La palabra debe tener 5 letras");
        return;
    }


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


    letterContainers.innerHTML += "<br>";


    intentos--;

    verification(correctLetters);

function verification(correctLetters) {
    if (correctLetters === 5) {
        alert("Ganaste");
        return;
    }
}
