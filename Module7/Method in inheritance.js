/* Inheritance refers to passing down characteristics from a parent to a child 
so that a new piece of code can reuse and build upon the features of an existing one */

class BusDriver {
    constructor(_name,_Age){
        this.name=_name
        this.Age=_Age
       
    }
    Welcome(){
        console.log(`Name is ${this.name}`)
    }
}

class Pilot extends BusDriver{ // Extends keyword is used because we are extending BusDriver class 
    constructor(_name,_Age,_QualificationReq){ 
    super(_name,_Age)
    this.QualificationReq=_QualificationReq
       
    }   // The extends keyword extends a class (indicates that a class is inherited from another class)
    test(){
        super.Welcome()
    }
}
let Pilot1=new Pilot('Arman',20,'12th pass')
Pilot1.test()
