 // Loops are the statements which is used to control the flow of tasks and repetative programs

// Problem Statement: What if i have to print something 100 or 1000 times in this case we use for loop

name= 'Arman Salmani'
for(i=0;i>10;i--){
    console.log(name)
}


//Example 2 what if we have to find square numbers of the given array

number=[2,5,9,4,6,3,154]
squaredArr=[]
for(i=0; i<number.length; i++){
    squaredArr=number[i]*number[i]
    console.log(squaredArr)
}

// Excercise method 
//Excercise 1
for(i=0;i<16;i++){
    console.log('Number is: '+i)
}

//Excercise 2 Printing numbers from 12 & 24
for(i=12;i<=24;i++){
    console.log('Number is: '+i)
}

//Excersie 3 Finding odd numbers between 7 & 31
for(i=7;i<=31;i++){
    if(i%2 !=0){
        console.log("Odd numbers are: "+i)
    }
}

// Excercise 4 Printing even numbers between 10 to 20
for(i=10;i<=20;i++){
    if(i%2==0){
        console.log("Even numbers are: "+i)
    }
}

