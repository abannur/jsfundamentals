
//variable names starts with letter _ $
let $greeting ="Hello world!",$greeting1="Testing";

console.log($greeting,$greeting1);

//let
let val = 0;
val="Ten"
console.log(val);

//const
const APP_URL ="xyz"
console.log(APP_URL);

//let and const block scope
let count = 0 
if(true)
{
    let count = 10
    console.log(`The value of count inside if block :`,count);
}
console.log(`The value of count outside if block :`,count);

var count1 = 0 
if(true)
{
    var count1 = 10
    console.log(`The value of count inside if block :`,count1);
}
console.log(`The value of count outside if block :`,count1);