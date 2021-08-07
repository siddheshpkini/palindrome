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
        return this.content.toLowerCase();
    }
    //returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome(){
        return this.processedContent() === reverse(this.processedContent());
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

