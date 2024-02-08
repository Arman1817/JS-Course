// Call back is a function passed as an argument to another function

printFirstname=(firstname , cb)=>{
    console.log(firstname)
    cb("Salmani")
}
printLastname=(lastname)=>{
    console.log(lastname)
}
printFirstname('Arman', printLastname)