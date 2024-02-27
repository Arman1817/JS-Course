// Undefined -> variable has been declared but has not yet been assigned a value
let a;
console.log(a);


let arr=[1,2, ,4,5]  
console.log(arr[2]); // Here we are trying to access index value

function sum(a,b){
    let c = a+b;
    // return c ; 
}
let add=sum(5,4)
console.log(add);


// Null -> The null value represents the intentional absence of any object value.

let mylife = null
console.log(mylife);



// NotDefined-> Attempting to access variables or identifiers that are not declared or do not exist

console.log(d);