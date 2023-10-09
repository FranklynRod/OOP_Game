/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase("Hello World"),
        new Phrase("OpenAI is awesome"),
        new Phrase("Programming is fun"),
        new Phrase("Phrase guessing game"),
        new Phrase("Javascript rocks")];
        this.activePhrase = null;

    };
    //removes overlay and add phrase to the display to initate game
    startGame(){
        this.resetGameBoard();
        var overlay = document.getElementById("overlay")
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    };
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    };

    handleInteraction(button){
        button.disabled = true;

        const letter = button.textContent;
        const phrase = this.activePhrase;

        if (!phrase.checkLetter(letter)) {
        button.classList.add('wrong'); 
        this.removeLife(); 
         } else{
            button.classList.add("chosen");
            phrase.showMatchedLetter(letter);
            const winStatus = this.checkForWin();
            if (winStatus) {
                this.gameOver(); 

            }
        };

    }

    
   removeLife() {
    const scoreboard = document.querySelectorAll(".tries");
    for (const heart of scoreboard) {
        const heartImage = heart.querySelector("img");
        if (heartImage.src.includes("liveHeart.png")) {
            heartImage.src = "images/lostHeart.png";
            break;
        }
    }
    
    this.missed++;

    if (this.missed === 5) { 
        this.gameOver();
    }
}
    //check whether or not letters are hidden
    checkForWin(){
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    };

    //initiate and change overlay based on win or lose
    gameOver(){
        var overlay = document.getElementById("overlay")
        overlay.style.display = 'flex';

        var overlayTitle = document.getElementById("game-over-message");
        var status = this.checkForWin();

        if (status === true){
            overlayTitle.textContent = `Congrats! You win`;
            overlay.classList.remove('start', 'lose');
            overlay.classList.add('win');
        } else{
            overlayTitle.textContent = `Sorry! You lost Try again.`;
            overlay.classList.remove('start','winner');
            overlay.classList.add('lose');
        }
    };

    //reset board after a lose or win
    resetGameBoard() {
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';
    
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach(button => {
            button.classList.remove('chosen', 'wrong');
            button.classList.add('key');
            button.disabled = false;
        });
    
        const heartImages = document.querySelectorAll('.tries img');
        heartImages.forEach(image => {
            image.src = 'images/liveHeart.png';
        });
    }


}
