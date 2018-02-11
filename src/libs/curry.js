"use strict";

const assertIsNull = function(value, message){
    if (value == null) {
        throw(message);
    }
}

const assertFunctionNotProvided = function(fn) {
    assertIsNull(fn, "Function not provided");
};

const assertNoArguments = function(value) {
    assertIsNull(value, "No Arguments");
}

const curry = fn => {
    assertFunctionNotProvided(fn);

    let argLength = fn.length;

    return function curryOne(a) {
        assertNoArguments(a);

        if (argLength - 1 === 0) {
             return fn(a);
        }

        return curry(fn.bind(fn, a));
    };
};

export default curry;
