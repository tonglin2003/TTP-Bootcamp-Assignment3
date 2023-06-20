// const { describe } = require("yargs");
const {reverseString, isPalindrome} = require("./stringFunctions");

describe("reverseString(str) will return the reversed str", ()=>{
    test("reverseString('Hello') => 'olleH' ", () =>{
        expect(reverseString('Hello')).toEqual("olleH");
    });
    test("reverseString('Four') => 'ruoF' ", () =>{
        expect(reverseString('Four')).toEqual("ruoF");
    });
    test("reverseString('This is a long sentence') => 'olleH' ", () =>{
        expect(reverseString('This is a long sentence')).toEqual("ecnetnes gnol a si sihT");
    });

});

describe("isPalindrome(str) will return true if the str is palindrome else false", ()=>{
    test("should return false when given a non-palindrome string", () =>{
        expect(isPalindrome('Hello')).toBe(false);
    });
    test("should return true when given a palindrome string with spaces", () =>{
        expect(isPalindrome('WW O WW')).toBe(true);
    });
    test("should return false when given null", () =>{
        expect(isPalindrome(null)).toBe(false);
    });
    test("should return false when given an empty string", () =>{
        expect(isPalindrome('')).toBe(false);
    });
    test("isPalindrome('a') => false ", () =>{
        expect(isPalindrome('a')).toBe(true);
    });


});

