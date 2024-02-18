/* A constructor is a special function that creates and initializes an object instance of a class. 
   In JavaScript, a constructor gets called when an object is created using the new keyword.
   The purpose of a constructor is to create a new object and set values for any existing object properties.*/


function Person(_name,_Age,_Gender){
    this.name=_name
    this.Age=_Age
    this.Gender=_Gender

    this.Identity=function(){
        console.log(`Hello my name is ${this.name} and my Age is ${this.Age}`) // We can also create Method using constructor
    }
}
let person1=new Person('Arman',20,'M')
let person2=new Person('Chuhiya',20,'F')

console.log(person1)
console.log(person2)
person1.Identity() // Calling  Identity method 