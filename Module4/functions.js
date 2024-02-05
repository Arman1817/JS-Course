// *************Functions are pieace of code that performs a specific task*********
// In functions we have parameters and Arguments  
// Example 
function sub(a,b){  // a and b are my parameters 
console.log(a-b)
}
sub(50, 10) // 50 & 10 are my Arguments


// The Function Expression allows us to create an anonymous function that doesn't have any function name
add=function(a,b){
    console.log(a+b)
}
add(18,17)

/*Hoisting-> Hoisting is the default behaviour of javascript where 
 all the variable and function declarations are moved on top
Example*/

name() //Calling function above the declaration is known as Hoisting

function name(){
    console.log('Arman')
}

// Why hoisting is beneficial is we cannot call an expression function before declaration or defining it will show error
multi(4,5)

multi=function(n1,n2){
    console.log(n1*n2)
}