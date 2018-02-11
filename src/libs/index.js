import { rxRel, rxPage, rxPerPage } from "./rx";
import { map, split, reduceToObject } from "./helpers";

const mountObject = reduceToObject((acc, value) =>
    Object.assign(
        {
            [value[0]]: {
                page: value[1],
                perPage: value[2]
            }
        },
        acc
    )
);

const splitInSections = split(",");
const splitFields = map(split(";"));

const regexFields = (strPage, strPerPage, values) => values.map(value => {
        const page = Number(rxPage(strPage)(value[0])[1]);
        const perPage = Number(rxPerPage(strPerPage)(value[0])[1]);
        const rel = rxRel(value[1])[1];
        return [rel, page, perPage];
    });

export { mountObject, splitInSections, splitFields, regexFields };
