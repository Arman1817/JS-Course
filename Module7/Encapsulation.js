// Encapsulation is a way to restrict the direct access to some components of an object, 
//so users cannot access state values for all of the variables of a particular object.


// function Person(_name,_Age){
//     this.name=_name
//     this.Age=_Age
// }
// let Person1= new Person("Arman", 20)
// Person1.name='Armani' // Here i can Change the object name outside the constructor function
// console.log(Person1)


//----------------------------------------------------------------------------------------------------------------//

function Person(_name,_Age){
    var name=_name
    this.Age=_Age
    
    this.getname=function(){
        return name
    }
}
let Person1= new Person("Arman", 20) // Here it will give function anonymus
console.log(Person1.name)


// If we want to access name we have to call getname function 

console.log(Person1.getname())