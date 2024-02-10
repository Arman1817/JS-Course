// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr=[45,20,16,18,32,5,4,1,0,2]
let greaternum = arr.filter(function(num){
    return num>=5
})
console.log(greaternum)

