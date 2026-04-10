const POSSIBLE_WORDS = ["obdurate", "verdissimillitude",
    "defenestrate", "obsequious", "dissonant", "toad"];

var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let newGame = function(){
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}

let updatePage = function(){
    let clueString = "";

    for(let i = 0; i < word.length; i++)
    {
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }
        else{
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");

    if(word != "" && clueString.indexOf("_") < 0){
        guessArea.textContent = "You win! Guesses: " + guesses;
    }
    else if(guessCount == 0){
        guessArea.textContent = "You lose! The word was " + word + ". Guesses: " + guesses;
    }
    else{
        guessArea.textContent = "Guesses: " + guesses;
    }

    let image = document.getElementById("hangmanpic");
    image.src = "images/hangman" + guessCount + ".gif";
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();

    if(word == ""){
        input.value = "";
        return;
    }

    if(guessCount == 0){
        input.value = "";
        return;
    }

    if(document.getElementById("clue").textContent.indexOf("_") < 0){
        input.value = "";
        return;
    }

    if(guesses.indexOf(letter) >= 0){
        input.value = "";
        return;
    }

    if(word.indexOf(letter) < 0){
        guessCount--;
    }

    guesses += letter;
    input.value = "";
    updatePage();
}