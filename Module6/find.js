// Find method returns the first element which satisfies the condition

const transaction=[1000 , 2000 , -780, -450]
let withdrawal=transaction.find(function(n){
    return n<0
})
console.log(withdrawal)



