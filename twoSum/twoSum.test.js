const twoSum = require("./twoSum");

describe("twoSum(arr, target) will return an array of two index element, and its value add up to target", ()=>{
    test("given an array and target and should return the index if there is twoSum", () =>{
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
    });
    test("given an array with one element should return -1 to state no pair", () =>{
        expect(twoSum([0], 9)).toEqual(-1);
    });
    test("Given an array with all negative element should also work fine", () =>{
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual([2,4]);
    });
});