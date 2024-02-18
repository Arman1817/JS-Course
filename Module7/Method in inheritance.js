
class BusDriver {
    constructor(_name,_Age){
        this.name=_name
        this.Age=_Age
       
    }
    Welcome(){
        console.log(`Name is ${this.name}`) // Creating a method 
    }
}

class Pilot extends BusDriver{ 
    constructor(_name,_Age,_QualificationReq){ 
    super(_name,_Age)
    this.QualificationReq=_QualificationReq
       
    }   // The extends keyword extends a class (indicates that a class is inherited from another class)
    test(){
        super.Welcome() // Inheriting method 
    }
}
let Pilot1=new Pilot('Arman',20,'12th pass')
Pilot1.test() // Calling method 
