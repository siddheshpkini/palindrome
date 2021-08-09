module.exports = Phrase;


// Reverses a string.
function reverse(string){
    return Array.from(string).reverse().join("");
}

function palindrome(string){
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

//definfes a Phrase object

function Phrase(content) {
    this.content = content;
    //returns the all small content
    this.processedContent = function processedContent (){
        return this.letters().toLowerCase();
    }

    //Returns the letters in the content

    this.letters = function letters(){
        return (this.content.match(/[a-z]/ig) || []).join("");
    }
    //returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome(){
        if(this.letters()){
            return this.processedContent() === reverse(this.processedContent());
        }
        else{
            return false;
        } 
    }    
}

//define a translated object

function TranslatedPhrase(content, translation){
    this.content = content;
    this.translation = translation;

    this.processedContent = function processedContent(){
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();

