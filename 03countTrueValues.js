//3.   Create a function which returns the number of true values there are in an array.

var arr1=[true,false,true,true];
const result=arr1.filter((num)=>(num===true)).length;
console.log(result);