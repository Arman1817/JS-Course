// What is Method chaining? It is a programming strategy that simplifies and embellishes your code.


let person=[
    {name:'Arman', age: 21, Gender : 'M'},
    {name: 'John', age: 20, Gender : 'M'},
    {name: 'Jolly', age: 15, Gender: 'F'}
]
let Genmale=person.filter(function(male){
    return male.Gender=='M'
}).map(function(ages){
    return ages.age>=20
})
console.log(Genmale)