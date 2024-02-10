//The reduce() method executes a reducer function for array element.

//The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.



// This is for Sum 
const numbers=[1,2,3,4,5,6]
let sumnum=numbers.reduce(function(acc,value){
    let updatedsum = acc+value;
    return updatedsum;
},0)
console.log(sumnum)

// This is for Multiplication 

const number=[1,2,3,4,5,6]
let multinum=numbers.reduce(function(acc,value){
    let updatedmulti = acc*value;
    return updatedmulti;
},1)  //-> Here we have to update accumulated value to 1 
console.log(multinum)