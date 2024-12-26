/**falsy values
 * false,undefined,null,0,NaN,""(empty string)
 * otherthan these are truthy values
 * nullish value - undefined and null
 */
//false,undefined and null,0 ,NaN ,"" is falsy value in context of boolean
//
let val = NaN
if(val)
{
console.log("condition met");
}else{
console.log(`Given ${val} is falsy value`);
}
//undefined evaluvates to a NaN in the number context
let val2=6+undefined
console.log("result "+val2);
//undefined evaluvates to a 0 in the number context
let val3=6+null
console.log("result "+val3);