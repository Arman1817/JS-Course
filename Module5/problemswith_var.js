
// var name = 'Arman' // In var it overwrites the values that's the main problem to overcome from this prblm we use const method

// var name ='Neha'
// console.log(name)


// **********Example with const (const doest allow to change var value)************
// const name ='Arman'
//  name ='Neha'
// console.log(name)

// name ='Arman'
// if (name==='Arman'){
//     name2='Neha'
//     console.log(name2)  // and Problem is that we can access the name2 
//     //var outside the if statement which can cause security issues
// }
// console.log(name2)




// var keywords are not a blocked scope they are function scoped means in function we can't access var  outside 
//Example 

function name(){
    var naam=30
    console.log(naam)
}
name()

console.log(naam)