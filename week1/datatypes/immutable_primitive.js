//all primitive types are immutable
//expect undefined and null ,every other 5 primitives have wrapper object types(starts with upper)

let day ="sunday"
console.log(day);
console.log(day.toUpperCase());
console.log(day);//string is immutable

//object and arrays are mutable

let bool = true
let bool1 = Boolean(true)
let num = Number(10)
let str = String("Anita")
console.log(bool1,str);