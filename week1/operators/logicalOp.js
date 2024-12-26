//&& purpose - conditonal statements and to have default values
//let  val ="Monday" 
let val =""
if(typeof val ==='string' && val.length>1)
{
    console.log(`valid string ${val}`);
}
else{
    console.log(`not valid string ${val}`);
}



//||
// OR operator with default value

let day ="sunday"
if(day === ('sunday' || 'saturday'))
{
    console.log("valid day");
}
else{
    console.log("not a valid day");
}
let targetBrowser ="firefox"
let browser = targetBrowser|| "Chrome" // if targetBrowser is not truthy value then chrome is appended
console.log(`browser value ${browser}`);
//!

let firstname ="Rob"
let lastname = "Bob"
if(firstname)
{
console.log(firstname);
}

if(!firstname || !lastname)
    {
    console.log(`one of the given values ${firstname} or ${lastname}is not valid data`);
    }

//ternary operator
//basic usage
//let runner = "local"
//let logLevel = runner ==="local" ?"info":"error"
//console.log(`log level ${logLevel}`);

//advanced usage
let runner = "cloud"
let logLevel= runner ==="local" ?"info":runner ==="cloud" ?"silent":"error" 
console.log(logLevel);