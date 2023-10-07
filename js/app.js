/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var startGame = document.getElementById("btn__reset");
var game

//creates new game when clicked button is clicked
startGame.addEventListener("click",(e) => {
    game = new Game();
    game.startGame();

})

//interaction was handled when letters were clicked
const keyBoard = document.getElementById("qwerty");

keyBoard.addEventListener('click', (e) =>{
    if (e.target.classList.contains('key')){
    game.handleInteraction(e.target);
}
});