import mockLink from "./../mock";
import parserLink from "./../src/index";

describe("index.js", () => {

    it("mock link parsed from parser function", () => {
        let result = parserLink(mockLink, "_page", "_limit");
        let expected = {
            first: { page: 1, perPage: 10 },
            next: { page: 2, perPage: 10 },
            last: { page: 10, perPage: 10 }
        };

        expect(result).toEqual(expected);
    });
});

