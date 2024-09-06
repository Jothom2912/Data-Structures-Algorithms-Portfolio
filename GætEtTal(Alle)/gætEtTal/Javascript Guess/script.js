window.addEventListener("load", start);

let secret;

function start() {
    console.log("JavaScript is running");
    secret = generateRandomNumber(); 

    const submitButton = document.getElementById("submitGuess");
    submitButton.addEventListener("click", handleGuess);
}

function generateRandomNumber() {
 
    return Math.floor(Math.random() * 100) + 1;
}

function handleGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value, 10); 

   
    if (isNaN(guess)) {
        outputAnswer("Please enter a valid number.");
        return;
    }

   
    const result = compare(guess, secret);

    if (result > 0) {
        outputAnswer(`You guessed ${guess}. It was too low.`);
    } else if (result < 0) {
        outputAnswer(`You guessed ${guess}. It was too high.`);
    } else {
        outputAnswer(`Congratulations! You guessed ${guess}. It was correct.`);
    }


    guessInput.value = "";
}

function compare(guess, secret) {
    if (guess > secret) return -1;
    if (guess < secret) return 1;
    return 0; 
}

    function outputAnswer(text) {
        console.log(text);

    
        const guessList = document.getElementById("guess");
        const listItem = document.createElement("li");
        listItem.textContent = text;
        guessList.appendChild(listItem);
    }
