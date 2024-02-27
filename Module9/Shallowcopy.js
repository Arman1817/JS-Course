person1={
    name:'Arman'
}
let person2={...person1} // using spread operator it will not change the variable value
person2.name='Daniel'
console.log(person1.name)
console.log(person2.name)


// Problem with Spread Operator 

person1={
    name:'Arman',
    address:{
        city: 'Mumbai'
    }
}
let person2={...person1} 
person2.address.city='Delhi' // When we have more objects it will not work on it to solve this we have Deepcopy
console.log(person1)
console.log(person2)


