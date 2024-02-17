// In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

//  console.log(this) // It will give empty object

//  // calling this keyword in function 

 function name(){
    console.log(this)
 }
 name() // Here it gives global object

//  // Calling this keyword in object function

 let myobj1={
    name : 'Arman',
    Age: 20,
    myfun1: function(){
        console.log(this)
    }
 }
 myobj1.myfun1() // object itself


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
 myobj.myfun2() // Here it gives global object




