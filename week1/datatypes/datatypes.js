// 8 types of datatypes ,7 primitive types
//string "Hello"
//number 5,4.10
//boolean true false - no default values for boolean
//undefined -declare a variable dont initialize , its value and type are undefined
//null - intentional optional value of object
//bigint 
//symbol - instances are unique and immutable
//object type-Object,Array,Date

//string
let str ="hello"
let str1 ='hello'
//template literal
let str3 = `${str},World!`
console.log(str3);

//number
let num =5
let num1=5.5

//boolean
let bool = true

//object
//literal form of object
let obj ={}
//array
let arr =[]
//regex
let reg =/abc/
//undefined,null
let value1= undefined
let value2=null

console.log(`Type of str is: ${typeof(str)}`);
console.log(`Type of num is: ${typeof num}`);
console.log(`Type of boolean is: ${typeof bool}`);
console.log(`Type of object is: ${typeof obj}`);
console.log(`Type of array is: ${typeof arr}`);
console.log(`Type of reg is: ${typeof reg}`);
console.log(`Type of undefined is: ${typeof value1}`);

console.log(`Type of null is: ${typeof value2}`);
//different form of data
//literal - value of the variable -'',""
//variable
//expression
console.log("Hello"); //literal form
let str2 ="hello" //variable form
console.log("he" +"llo"); //expression evaluvates to a value of string type

//boolean
console.log(true);//literal
let boolval= true//variable
console.log(boolval);
console.log(typeof(5<10));//expression(type = boolean ,value =true)


//function
function sum(num1,num2)
{
    return num1+num2 //return type is a number
}
console.log( sum(4,5));// prints 9
console.log( typeof (sum(4,5)));// prints  number

