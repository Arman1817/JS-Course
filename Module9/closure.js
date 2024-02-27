//A closure gives you access to an outer function's scope from an inner function

function test1(){
    a=2;
    function test2(){
        console.log(a); // Here test2 has access to test1 variable i.e a =2 
    }
    return test2
}
let output = test1() // In output we are just stroing the return value 
console.log(output) // In console output the test2() is stored 
output() 