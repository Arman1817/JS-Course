/*A module in JavaScript is just a file containing related code. In JavaScript, we use the
 import and export keywords to share and receivefunctionalities respectively across different modules.*/

function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}

module.exports={
    addition:add,
    subtraction:sub
}


