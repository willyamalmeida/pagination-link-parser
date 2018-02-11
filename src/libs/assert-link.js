const isString = str => typeof str === "string";
const isEmpty = str => str.length === 0;

const assert = (str, param) => {
    if (!isString(str)) {
        throw(`${param} must be a string`);
    }

    if (isEmpty(str)) {
        throw(`${param} is a invalid string`);
    }
};

const assertLink = (link, page, perPage) => {
    assert(link, "Link");
    assert(page, "Page");
    assert(perPage, "PerPage");
};

export default assertLink;
