const {add, subtract, multiply, divide} = require("./mathFunction");

describe("add(a,b) will return the addition of a and b", ()=>{
    test("add(5,5) => 10", () =>{
        expect(add(5,5)).toEqual(10);
    });
    test("add(8,10) => 18", () =>{
        expect(add(5,5)).toEqual(10);
    });
    test("add(0,0) => 2", () =>{
        expect(add(5,5)).toEqual(10);
    });
});

describe("subtract(a,b) will return the difference of a and b", ()=>{
    test("subtract(5,5) => 0", () =>{
        expect(subtract(5,5)).toEqual(0);
    });
    test("subtract(8,10) => 2", () =>{
        expect(subtract(8,10)).toEqual(2);
    });
    test("subtract(10,3) => 7", () =>{
        expect(subtract(10,3)).toEqual(7);
    });
});

describe("multiply(a,b) will return the product of a and b", ()=>{
    test("multiply(5,5) => 25", () =>{
        expect(multiply(5,5)).toEqual(25);
    });
    test("multiply(8,10) => 80", () =>{
        expect(multiply(8,10)).toEqual(80);
    });
    test("multiply(0,3) => 0", () =>{
        expect(multiply(0,3)).toEqual(0);
    });
});

describe("divide(a,b) will return the a/b", ()=>{
    test("divide(5,5) => 1", () =>{
        expect(divide(5,5)).toEqual(1);
    });
    test("divide(8,10) => 0.8", () =>{
        expect(divide(8,10)).toEqual(0.8);
    });
    test("divide(3,0) => 0", () =>{
        expect(divide(3,0)).toBe(Infinity);
    });
});
