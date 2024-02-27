person1={
    name:'Arman',
    address:{
        city: 'Mumbai'
    }
}
let person2=JSON.parse(JSON.stringify(person1))
person2.address.city='Delhi'
console.log(person1);
console.log(person2)