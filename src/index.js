import assertLink from "./libs/assert-link";
import compose from "./libs/compose";
import { mountObject, regexFields, splitFields, splitInSections } from "./libs";

const parserLink = (link, page, perPage) => {
    assertLink(link, page, perPage);

    const parserFields = compose(splitFields, splitInSections);
    const fields = parserFields(link);
    const values = regexFields(page, perPage, fields);

    let parser = mountObject(values);
    return parser;
};

export default parserLink;

// import assertLink from "./libs/assert-link";

// const rxRel = /rel="(.+)"/;

// const parser = (link, rxPage, rxPerPage) =>
//     link
//         .split(",")
//         .map(section => section.split(";"))
//         .map(value => {
//             const page = Number(rxPage.exec(value[0])[1]);
//             const perPage = Number(rxPerPage.exec(value[0])[1]);
//             const rel = rxRel.exec(value[1])[1];
//             return [rel, page, perPage];
//         })
//         .reduce((acc, value) => {
//             acc[value[0]] = { page: value[1], perPage: value[2] };
//             return acc;
//         }, {});

// const parserLink = (link, page, perPage) => {

//     assertLink(link, page, perPage);

//     const rxPage = new RegExp(`[?|&]${page}=(\\d+)`);
//     const rxPerPage = new RegExp(`[?|&]${perPage}=(\\d+)`);

//     return parser(link, rxPage, rxPerPage);
// }

// export default parserLink;
