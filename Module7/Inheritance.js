/* Inheritance refers to passing down characteristics from a parent to a child 
so that a new piece of code can reuse and build upon the features of an existing one */

class BusDriver {
    constructor(_name,_Age){
        this.name=_name
        this.Age=_Age
        
    }
}

class Pilot extends BusDriver{ // Extends keyword is used because we are extending BusDriver class 
    constructor(_name,_Age,_QualificationReq){ 
    super(_name,_Age)
    this.QualificationReq=_QualificationReq
        
    }   // The extends keyword extends a class (indicates that a class is inherited from another class)
}

class Locopilot extends BusDriver{
        constructor(_name,_Age,_Eyesight){
        super(_name,_Age)
        this.Eyesight=_Eyesight
        
        }
}

let BusDriver1=new BusDriver('Arman',20)
console.log(BusDriver1)

let Pilot1=new Pilot('Armani',21,'12th Pass')
console.log(Pilot1)

let Locopilot1=new Locopilot('Hitler',45,-2)
console.log(Locopilot1)