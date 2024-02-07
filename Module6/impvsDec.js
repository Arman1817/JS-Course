// We will be given a number and we have to check that if the given number is even or not 

// This is an imperative way of writing code
/*code describes a step-by-step process for a program's execution.*/

let a = 6
const Squarednum = a*a
let isEven

if(Squarednum %2==0){
    isEven=true
}
else{
    isEven=false
}
console.log(isEven)

//This is an  Declarative way of writing code
/* Declarative programming is a method to abstract away the control flow for logic required
 for software to perform an action, and instead involves stating what the task or desired outcome is.*/

Squarednum = (x) =>(x*x%2==0 ? true : false)
    console.log(Squarednum(10))
