(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("siddheshpk-palindrome");

let string = prompt("Enter a string to check for palindrome");
let phrase = new Phrase(string);

if(phrase.palindrome()){
    alert(`"${phrase.content}" is a palindrome`);
} else{
    alert(`"${phrase.content}" is not a palindrome`);
};



},{"siddheshpk-palindrome":2}],2:[function(require,module,exports){
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


},{}]},{},[1]);
