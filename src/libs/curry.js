"use strict";

const curry = fn => {
    if (fn == null) {
        throw("Function not provided");
    }

    let argLength = fn.length;

    return function curryOne(a) {
        if (a == null) {
            throw("No Arguments");
        }

        if (argLength - 1 === 0) {
             return fn(a);
        }

        return curry(fn.bind(fn, a));
    };
};

export default curry;
