let Person1={
    name:'Arman',
    lname: 'Salmani',
    Age:20,
}


let CallingName=function(city , pincode){
    console.log(`Hii I'm ${this.name} ${this.lname} and my Age is ${this.Age} and my city is ${city} and pincode ${pincode}`)
}

let Person2={
    name: 'Ninja',
    lname: 'Hattori',
    Age: 45120,


}
CallingName.apply(Person2, ['Mumbai',4000874]) // Apply method is same as call method the difference is apply method takes argument in Array
CallingName.call(Person1, 'Mumbai',40015)