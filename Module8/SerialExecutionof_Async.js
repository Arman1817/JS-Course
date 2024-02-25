
console.log('Start')

const fs =require('fs')

fs.readFile('file1.txt', cb1)
function cb1(err,data){
    if(err){
        console.log(err)
    }
    console.log('File name: '  +  data)
    fs.readFile('file2.txt', cb2) // Putting fs readFile of file 2 into file so it will give output in serial or sequence way
}


function cb2(err,data){
    if(err){
        console.log(err)
    }
    console.log('File name: '  +  data)

}

console.log('End')


// Expected Output 

// File 1 Data
// File 2 Data
