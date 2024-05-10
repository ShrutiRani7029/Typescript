"use strict";
const a = 24;
console.log(a);
//alert(a);
///Typescript datatypes : number, boolean, string, void, null, undefined, any
let b = "{23}"; ///yha b ko string hi rkhna pdega
console.log(b);
let c = 23; //yha c and d me bydefault any leta hai jha hm koibhi value daal skte
console.log(c);
let d = "{shru}";
console.log(d);
//let e=<string>343 //ye error denge kyuki yha bhi string hi hone chahiye
let e = "rani";
console.log(e);
///if we want to add multiple data types then we can use unions,
let surname;
surname = "shruti part 02";
console.log(surname);
const func = (n, m) => {
    console.log(n, m);
    //return String(n*m); ///ye error denge kyuki return number hone chahiye
    return (n * m);
};
