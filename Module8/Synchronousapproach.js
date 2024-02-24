//As the name suggests synchronous means to be in a sequence, 
//i.e. every statement of the code gets executed one by one

const fs =require('fs') // file system module allows you to work with the file system on your computer.
console.log("Hello my name is Arman")
let file=fs.readFileSync('file1.txt')
console.log("I love to playing Games")
console.log(`file name: `+ file)