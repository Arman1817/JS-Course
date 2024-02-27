const calculate=(a,b,operation)=>{ 
    return operation(a, b )
}

// Method 1
let addition=calculate(2,3,function(num1,num2){
    return num1+num2
})
console.log(addition);

 // Method 2 
subtraction=(a,b)=>a-b
let subtractionresult=calculate(10,8,subtraction)
console.log(subtractionresult)

// Method 3 

function multiply(a,b){
    return(a*b); 
}
let multiplyres=calculate(5,4,multiply)
console.log(multiplyres);