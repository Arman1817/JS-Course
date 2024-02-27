// It is a technique in functional programming, that transforms the function of multiple arguments
//into several functions of a single argument in sequence.


//without function currying 
// function sum(a,b){
//     console.log(a+b)
// }
// sum(4,5)

//with function currying 

function sum2(c){
    return function(d){
        console.log(c+d)
    } 
}
let addition=sum2(4)
addition(5)

