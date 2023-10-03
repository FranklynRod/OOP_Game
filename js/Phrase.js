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
        const listItem = document.querySelector("li");
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
    const selectedLetter = document.querySelector(`.letter.${letter}`);

    for(const element of selectedLetter){
        element.className.remove('hide');
        element.className.add('show');
    }
}


};
var newPhrase = new Phrase("Hello");
newPhrase.addPhraseToDisplay();
// console.log(display)