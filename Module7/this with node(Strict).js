
'use strict'

console.log(this)


//Using Strict in function 

function Strict(){  // It gives undefined 
    console.log(this)
}
Strict()


// Calling this keyword in object function
 let Identity= {
    name: 'Arman',
    Age: 20,
    Gender: 'M',
    Strict: function(){
        console.log(this)
    }

}
Identity.Strict()

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
 myobj.myfun2() // Here it gives undefined 



