//advanced use case with an array

let arr = ["apple", "banana", 20, 10, "melon", "grape", 30];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "number") continue;
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}
console.log(sum);

//foreach
//()=>{}
let window = ["amazon", "google", "youtube"];
window.forEach((val, index, array) => {
  console.log(val);
  console.log(index);
  console.log(array);
});
//while loop (do something until some condition and no end condition)
//retry until you get a response from API
/* let count = 1;
while (count < 10) {
  console.log(count);
  count++;
} */

let count1= 1;
let isDataReturned = false
while (isDataReturned===false && count1<=10) {
    console.log(count1);
    if(count1==5) {isDataReturned = true}
    count1++;
  }


//for...of loop -->array
let Obj ={
    a:10,
    b:20,
    c:30
}

let windows =["google","youtube","amazon"]

//for...in loop -->Object
for(let key in Obj){
   // console.log(`>>>> keys are ${key}`);
    console.log(`>>>> values ${Obj[key]}`);
}
for(let ele of windows ){
    // console.log(`>>>> keys are ${key}`);
     console.log(`>>>> elements of array ${ele}`);
 }