/* A JavaScript Promise object represents the eventual completion or failure of an asynchronous
 operation. It enables you to register callbacks
 for notifications when the operation completes or fails and to handle errors or results. */


let mypromise = new Promise(function(resolve, reject){
        const a = 10;
        const b = 10;
        setTimeout(() => {
            if (a===b) {
                resolve('Values are Equal');
            } 
            else{
                reject('The values are not equal')
            }
        }, 2000);
        
})
console.log(mypromise) // Pending State 

mypromise.then(function(result){ // Fulfilled State
    console.log(result)
})

mypromise.catch(function(err){ // Rejected State 
    console.log(err)
})