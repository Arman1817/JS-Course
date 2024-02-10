//The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.



// In this example we are seprating even number 
const Array=[45,12,85,74,68,18,17]
let Evennum=Array.filter(function(n){
    return n%2==0
})
console.log(Evennum)

// Example 2

const transaction=[1000,3000,4000,2000,-200,3000,-45000]
let postran=transaction.filter(function(n){
    return n>0
})
console.log(postran)