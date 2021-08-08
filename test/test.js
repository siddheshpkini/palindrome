let assert = require("assert");
const internal = require("stream");
let Phrase = require("../index.js");

describe("Phrase", function(){
    describe("#palindrome", function(){
        it("should return false for a non palindrome", function(){
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });
        it("should return false for a non palindrome", function(){
            let planePalindrome = new Phrase("racecar");
            assert(planePalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function(){
            let mixedCase = new Phrase("RaceCar")
            assert(mixedCase.palindrome());
        });

        it("should return true for a palindrome with punctuations", function(){
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });

        it("should return false for a empty phrase", function(){
            let emptyPhrase = new Phrase("");
            assert(!emptyPhrase.palindrome());
        });

        describe("#letters", function(){
            it("should return only letters", function(){
                let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
                assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
            });

            it("should return an empty string for if there are no characters", function(){
                let punctuatedPalindrome = new Phrase("&^#%$)*#");
                assert.strictEqual(punctuatedPalindrome.letters(), "");
            });
        });

        
    });
});