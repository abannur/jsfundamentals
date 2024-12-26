//if
let popUpExists = false;
if (popUpExists === true) console.log(`>>>perform actions`);

//if not

let data;
//if(!data) throw Error (">> not a valid data")

//if else
let fileExists = "Y";
if (fileExists === "Y") {
  console.log(`>>>>reading a file`);
} else {
  console.log(`>>>>creatuing a file`);
}

//nested if else conditions
let err = "";
if (err === "Error") {
  console.log(`>>retry`);
} else if (err === "AssertionError") {
  console.log(`>>Fail the test`);
} else if (err === "Data validation") console.log(`>>read the test data file`);
else {
  console.log(`>>print the error`);
}

//use case :inner condition (querying database )
let isSuccess = true;

if (isSuccess === true) {
  console.log(`>> storing the db values`);
} else {
  console.log(`>> no data received`);
  let errorCode = "Accept";
  if (errorCode === "Accept") {
    console.log(`>>continue execution`);
  } else {
    console.log(`>>fail the test`);
  }
}
