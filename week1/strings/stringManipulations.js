"use strict";
let str ="Hello Java";
console.log(str.charAt(5));

console.log(str.length);
/** ways to create string
 * 1.literals
 * " ",'',template literate
 * 2.Object
 */
let val ='Hello world';
let val1 =`Hello world`;
let val2 = String("Hello world")
console.log(val===val2);
/** formating string using template literal 
 * ABC bank statement from 
*/
// example 1
let startDate="2022-01-01";
let endData="2022-02-01";
let accNo=1234;
let emailSubject = `ABC bank statement from ${startDate} to ${endData} for account ending with ${accNo}`
console.log(emailSubject);

/**
 * string comparison 
 * 1.Full match
 * 2.Partial match
 * -includes(),startsWith(),endsWith()
 */
let fileName = "Invoice_123.pdf"
//full match
if(fileName.toUpperCase().trim()==="invoice_123.pdf".toUpperCase()){
    console.log(`>>>file name matches......`);
}

//partial match
if(fileName.startsWith("Invoice"))
{
    console.log(`>>>matches `);
}

if(fileName.endsWith(".pdf"))
    {
        console.log(`>>>matches ending `);
    }
    
/**
 * extract substring (slice(),substring())
 */
let date ="2024-06-26"
let yymmdd = date.slice(2)
console.log(`year is ${yymmdd}`);

let year = date.slice(0,4)
console.log(`year only is ${year}`);

let mnth = date.slice(5,7)
console.log(`month only is ${mnth}`);

//let day = date.slice(8,10)
//let day = date.slice(8)
let day = date.slice(-2) // negative index
console.log(`day only is ${day}`);

/**
 * string replace 
 */

let file="invoice_123.pdf"
let query ="select * from {{table_name}}"
let dt ="2022-01-01";

//get only the filename
let newFile = file.replace(".pdf","")
console.log(`new file name is ${newFile}`);

let txtFile = file.replace("pdf","txt")
console.log(`new txt file name is ${txtFile}`);

let newQuery = query.replace("{{table_name}}","Accounts")
console.log(`new query is ${newQuery}`);

let yyyymmdd = dt.replace(/-/g,"")
console.log(yyyymmdd);

/**
 * split method
 */

let timestamp ="2024-10-24T10:51:23.207Z"
let values = timestamp.split("T")
let hello="hello world"
console.log(`values are ${values[1]}`);
console.log(`string split ${hello.split('h')}`);

/**
 * use index of method
 */
let text= "Application no {12345} submitted"
let start = text.indexOf("{")
let end = text.indexOf("}")
let appNo = text.slice(start+1,end)
console.log(`app number >>>> ${appNo}`)