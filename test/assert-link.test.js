import assertLink from "./../src/libs/assert-link";

describe("assert-link.js", () => {

    it("link param type of string", () => {
        expect(() => { assertLink() }).toThrow('Link must be a string');
    });

    it("link param invalid string", () => {
        expect(() => { assertLink("") }).toThrow('Link is a invalid string')
    });
});

