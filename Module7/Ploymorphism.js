// Polymorphism means the same function with different signatures is called many times

class Animal{
    sound(){
        console.log('Animals make different sounds')
    }
}


class Cat{
    sound(){
        console.log('Cat meows') // In this we are using same sound name method in Cat , Dog & Duck 
    }
}

class Dog{
    sound(){
        console.log('Dog Barks')
    }
}

class Duck{
    sound(){
        console.log('Duck Qwaks')
    }
}

let Animal1=new Animal()
Animal1.sound()

let Dog1=new Dog()
Dog1.sound()

let Duck1=new Duck
Duck1.sound()