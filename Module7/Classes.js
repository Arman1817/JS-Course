/* A class is a type of object template. The class statement initiates a JavaScript class. 
   Properties and methods are assigned in the constructor() method.
   The constructor() method is called each time a class object is initialized.*/

class Person{
    constructor(_name,_Age,_Status){
        this.name=_name,
        this.Age=_Age,
        this.Status=_Status
    }
    welcome=function(){ // In classes while defining Method we dont want to assign this keyword
        console.log(`Welcome ${this.name} `) 
    }
}
let Person1=new Person('Arman',20,'Unmarried')
let Person2=new Person('Habibi',20,'Unmarried')
let Person3=new Person('Angelina',20,'married')
console.log(Person1)
console.log(Person2)
console.log(Person3)
Person1.welcome()  // Calling method 