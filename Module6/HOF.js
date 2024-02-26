//Without using map function 

// let arr=[1 , 2, 3, 4, 5]
// let squaredarr=[]

// for(i=0;i<arr.length; i++){
//     squaredarr.push(arr[i]*arr[i])
// }
// console.log(squaredarr)





// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

let arr=[1 ,2 ,3 ,4 ,5]
squaredarr=arr.map(function(squarednum){
    return squarednum*squarednum
})
console.log(squaredarr)


//A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//Excercise -> Convert the given indian transaction array into $Dollar 

const transaction1 = [1000, 3000, 4000, 2000 ,-4600]
const intoDollar1 = 80;

rupeeintodoll1=transaction1.map(function(dollar1){
    return (dollar1/intoDollar1).toFixed(0) // to fixed is used to get fixed number not a decimal number 
})
console.log(rupeeintodoll1)






// Trying to solve same problem with foreach method (forEach doesnot return in array while map method returns output in array)

const transaction = [1000, 3000, 4000, 2000 ,-4600]
const intoDollar = 80;

rupeeintodoll=transaction.forEach((dollar)=>{
    console.log((dollar/intoDollar).toFixed(0)) // tofixed is used to get fixed number not a decimal number 
})



