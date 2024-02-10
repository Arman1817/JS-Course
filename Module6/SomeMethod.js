// Some method wiil return true if even 1 element statifies the function condition

const transaction=[1000 , 2000 , -780, -450]

let someMethresult = transaction.some(function(n){
    return n>0;
})
console.log(someMethresult)

// It will return false when all the transactions will be negative 

const transaction2=[-1000 , 2000 , 780, 450]

let someMethresult2 = transaction2.some(function(n){
    return n>0;
})
console.log(someMethresult2)

// Every method is same like Some method but in this Every element should satisfy the function condition 

let someMethresult3 = transaction2.every(function(n){
    return n<0;
})
console.log(someMethresult3)