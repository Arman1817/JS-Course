function Placeorder(drink){
    return new Promise(function(resolve,reject){
        if(drink=='Coffee'){
            resolve('Order for coffee Received')
        }
        else{
            reject('Order is not for coffee')
        }
    })
}

function processOrder(order){
        return new Promise(function(resolve){
        console.log('Order being Processed')
        resolve(`${order} is Served`)
    })
}
// Placeorder('Coffee').then(function(orderplaced){
//     console.log(orderplaced); // Here we are printing the first promise resolve

//     let OrderisPlaced=processOrder(orderplaced)
//     return OrderisPlaced // After order received we processed

// }).then(function(orderserved){ // Here creating another then function to ( resolve the processOrder)
//     console.log(orderserved)

// }).catch(function(err){
//     console.log(err)
// }) 


// Above Example shows Chaining of Promise(Is a simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results) 
// (What If we have largest scenario where we have to handle more resolves it will be difficult for us to keep tracks of resolves, to solve this problem we have Async and Await)
// To resolve the Chaining of Promise we have Async and Await keyword 


// Solving above example with async and await 

// async function serveOrder(){
//     let orderplaced=await Placeorder('Coffee')
//     console.log(orderplaced)
//     let processingOrder= await processOrder(orderplaced)
//     console.log(processingOrder);
// }
// serveOrder()


// To catch error we have to put our async function in try catch block

try {
    async function serveOrder(){
        let orderplaced=await Placeorder('Tea')
        console.log(orderplaced)
        let processingOrder= await processOrder(orderplaced)
        console.log(processingOrder);
    }
    serveOrder()
     
} catch (error) {
    console.log(error)
}
 

