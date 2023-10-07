/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var startGame = document.getElementById("btn__reset");
var game

startGame.addEventListener("click",(e) => {
    game = new Game();
    game.startGame();

})

const keyBoard = document.getElementById("qwerty");

keyBoard.addEventListener('click', (e) =>{
    if (e.target.classList.contains('key')){
    game.handleInteraction(e.target);
}
});