/**
 * string to number
 * number to string
 */

//string to number parseInt() parseFloat() unary plus ,toString()

let val1="5"
let val2="5.5"
//unary plus
let result = +val1
console.log(result);
console.log(`Type of value :${typeof val1}`); //string
console.log(`Type of value :${typeof val2}`); //string
//convert a string to number
console.log(`Type of value :${parseInt(val1)}`);
console.log(`Type of value :${parseFloat(val2)}`);
//convert to a string
console.log(result.toString());
console.log(`The type of result:${typeof result.toString()},and the value ${result}`);

/**
 * {}- object
 * []-array
 * /abc/ - regular expression
 * "",''-empty string
 */