/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var startGame = document.getElementById("btn__reset");
var game

startGame.addEventListener("click",(e) => {
    game = new Game();
    game.startGame();

})