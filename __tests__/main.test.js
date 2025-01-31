const { isItPrime } = require("../main")

describe("it is prime?", () => {
    it("returns a boolean", () => {
        expect(typeof isItPrime()).toBe("boolean");
    })


    it("returns false when passed nothing", () => {
        expect(isItPrime()).toBe(false);
    })

    it("returns true when passed prime numbers", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(41)).toBe(true);
        expect(isItPrime(67)).toBe(true);
        expect(isItPrime(89)).toBe(true);
        expect(isItPrime(97)).toBe(true);
    })

    it("returns false when passed non prime numbers", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(42)).toBe(false);
        expect(isItPrime(76)).toBe(false);
        expect(isItPrime(91)).toBe(false);
        expect(isItPrime(96)).toBe(false);
        expect(isItPrime(100)).toBe(false);
        expect(isItPrime(144)).toBe(false);
    })
})