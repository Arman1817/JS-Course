//Prototype in JavaScript is an object that is used to add new properties and methods to existing objects.
//It is a powerful tool for creating custom objects and for sharing code between objects.


function Person(_name,_Age){
    this.name=_name
    this.Age=_Age
    
}
Person.prototype.getNameandAge=function(){
        console.log(`I'm ${this.name} and my Age is ${this.Age}`)
}
let Person2= new Person('Chuhiya',20)
let Person1= new Person('Arman',20)
console.log(Person1)
console.log(Person2.getNameandAge())