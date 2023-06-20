const reversedString = require("./reversedString");

describe("reversedString(str) will return the reversed str", ()=>{
    test("reverseString('Hello') => 'olleH' ", () =>{
        expect(reversedString('Hello')).toEqual("olleH");
    });
    test("reverseString('Four') => 'ruoF' ", () =>{
        expect(reversedString('Four')).toEqual("ruoF");
    });
    test("reverseString('This is a long sentence') => 'olleH' ", () =>{
        expect(reversedString('This is a long sentence')).toEqual("ecnetnes gnol a si sihT");
    });
    test("Given an empty string should return nothing", () =>{
        expect(reversedString('')).toEqual("");
    });
    test("Given an null should return null", () =>{
        expect(reversedString(null)).toBe(null);
    });
    test("Given one letter should return one letter", () =>{
        expect(reversedString('w')).toBe('w');
    });


});