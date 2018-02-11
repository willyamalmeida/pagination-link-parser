import curry from "./../src/libs/curry";

describe("curry.js", () => {

    it("Function not provided", () => {
        expect(() => {curry(null)}).toThrow("Function not provided");;
    });

    it("No Arguments", () => {
        expect(() => { curry(() => {})() }).toThrow("No Arguments");;
    });
});

