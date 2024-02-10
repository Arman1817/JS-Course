// findIndex method is used t ofind out element index

const transaction=[1000 , 2000 , -780, -450]
let withdrawal2=transaction.findIndex(function(n){
    return n<0
})
console.log(withdrawal2)