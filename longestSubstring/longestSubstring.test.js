const longestSubstring = require("./longestSubstring");

describe("longestSubstring(str) will return the length of longest substring in str", ()=>{
    test("should return the length of longest substring", () =>{
        expect(longestSubstring('pwwkew')).toEqual(3);
    });
    test("given all same letter should return 1", () =>{
        expect(longestSubstring('bbbbb')).toEqual(1);
    });
    test("should return the length of longest substring", () =>{
        expect(longestSubstring('dvdf')).toEqual(3);
    });
    test("should return the length of longest substring", () =>{
        expect(longestSubstring('abcabcbb')).toEqual(3);
    });

});