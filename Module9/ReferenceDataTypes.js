// Same Example with Reference 

Person1={
    name: 'Arman'
}
let Person2=Person1
Person1.name='Salman'
console.log(Person1.name)
console.log(Person2.name); // In this through reference it both the values will be changed and it uses Heap memory