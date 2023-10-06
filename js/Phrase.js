/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay(){
    const phraseSection = document.getElementById("phrase");
    const unorderedList = phraseSection.querySelector("ul");

    unorderedList.innerHTML = " ";
    

    for (const letter of this.phrase){
        const listItem = document.createElement("li");
        if (letter === " "){
            listItem.className = 'space';
            listItem.textContent = " ";
        } else{ 
            listItem.className = `hide letter ${letter}`
            listItem.textContent = letter}    

        unorderedList.appendChild(listItem);  
    };
}

checkLetter(letter){
    return this.phrase.includes(letter);
};

showMatchedLetter(letter){
    const selectedLetters = document.querySelectorAll(`.letter.${letter}`);

    selectedLetters.forEach(element => {
        element.classList.remove('hide');
        element.classList.add('show');
    });
}
};
