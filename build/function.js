"use strict";
//Optional Parameter
const func1 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
console.log(func1(5, 4));
const func2 = (n, m, l = 20) => {
    return n * m * l;
};
console.log(func2(5, 2, 10));
const func3 = (...m) => {
    return m;
};
console.log(func3(1, 2, 3, 7, 999090, 4690));
//Rest Operator
