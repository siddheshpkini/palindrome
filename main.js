let Phrase = require("siddheshpk-palindrome");

let string = prompt("Enter a string to check for palindrome");
let phrase = new Phrase(string);

if(phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome`);
} else{
    alert(`"${phrase.content}" is not a palindrome`);
};


