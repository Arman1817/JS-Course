console.log('Start')

const fs =require('fs')

fs.readFile('file1.txt', cb1)
function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log('File name' + data)

}

fs.readFile('file2.txt', cb2)
function cb2(err,data){
    if(err){
        console.log(err)
    }
    console.log('File name' + data)

}

console.log('End')