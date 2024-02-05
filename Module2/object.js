laptop={
    Name:'Lenova',
    RAM : 8,
    Drive:'SSD',
    Model:[1,5,4,6],
    Company:{
        Name: 'Lenova',
        add: 'Bhatwadi Ghatkopar west'
    }
}
console.log(laptop)

    //Bracket Notations

console.log(laptop['Name'])
console.log(laptop.Company.Name)

    //Deleting 

console.log(delete laptop.Company)
console.log(laptop)