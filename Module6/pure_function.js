//Impure function that has side effects or does not always return the same output when given the same input.

a = 6
function add(x){
    console.log(a+x)
}
add(3)
add(5)
add(6)

// A pure function is one that delivers the same result every single time given the same set of inputs.

function add(a ,b ){
    return a+b  // we will use return because console.log uses external resources 
}
console.log(add(5, 10))