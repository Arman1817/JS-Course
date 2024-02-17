console.log(this) // it gives window object while in node js it gives empty object 

function Displaythis(){ // In function it again gives window object 
    console.log(this)
}
Displaythis()

let myobj1={  // In object function it gives object itself
    name : 'Arman',
    Age: 20,
    myfun1: function(){
        console.log(this)
    }
 }
 myobj1.myfun1() 


// Calling this keyword in object function function 
let myobj={
    name : 'Arman',
    Age: 20,
    myfun2: function(){
        function myfun3(){
            console.log(this)

        }
        myfun3()
        
    }
 }
 myobj.myfun2() // Here it gives window object  again 
