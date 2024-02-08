person ={
    Name: 'John',
    Looks: 'Cute',
    Age: 21,
    Address:{
        Postalcode: 400084,
        District: 'kurla'

    }
}

// let { Name,Looks,Age }=person //In object we have to pass same key pair 
// console.log(Name)

// What if we have to destructure objects into objects

let {Name:n, Looks:L ,Age:A ,Address:{District:d}}=person
console.log(n)
console.log(L)
console.log(A)
console.log(d)
