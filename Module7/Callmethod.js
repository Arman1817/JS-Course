/* The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object  as an argument (parameter).*/

// Before Using Call method

let Person1={
    name:'Arman',
    lname: 'Salmani',
    Age:20,

    CallingName:function(){
        console.log(`Hii I'm ${this.name} ${this.lname} and my Age is ${this.Age} `)
    }
}

let Person2={
    name: 'Ninja',
    lname: 'Hattori',
    Age: 45120,

    CallingName:function(){
        console.log(`Hii I'm ${this.name} ${this.lname} and my Age is ${this.Age} `)
    }
}
Person1.CallingName()
Person2.CallingName()

// After using Call method 

let  Person3={
    name:'Arman',
    lname: 'Salmani',
    Age:20,

    CallingName:function(){
        console.log(`Hii I'm ${this.name} ${this.lname} and my Age is ${this.Age} `)
    }
}

 let Person4={
    name: 'Ninja',
    lname: 'Hattori',
    Age: 45120,

}
Person3.CallingName.call(Person4) // Here we are invoking CallingName method for Person2 