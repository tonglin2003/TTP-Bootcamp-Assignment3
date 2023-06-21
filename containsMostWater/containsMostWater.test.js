const containsMostWater = require("./containsMostWater");

describe("containsMostWater(height) will return the maximum area", ()=>{
    test("should return the length of longest substring", () =>{
        expect(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    });
    test("given an array with 1 element, and return 0", () =>{
        expect(containsMostWater([1])).toEqual(0);
    });
    test("given an array, and return the max area", () =>{
        expect(containsMostWater([1, 2, 1])).toEqual(2);
    });
    test("given an array, and return the max area", () =>{
        expect(containsMostWater([4, 3, 2, 1, 4])).toEqual(16);
    });
    test("given an array, and return the max area", () =>{
        expect(containsMostWater([2,4,6,7,5,1])).toEqual(12);
    });

});