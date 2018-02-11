import curry from "./curry";

const reduce = curry((initialValue, fn, arr) => arr.reduce(fn, initialValue));
const map = curry((fn, arr) => arr.map(fn));
const split = curry((delimiter, str) => str.split(delimiter));
const reduceToObject = reduce({});

export { map, split, reduceToObject };
