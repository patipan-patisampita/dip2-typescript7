class Animal {
    //Instance method
    move(){
        console.log("Animal parent class. Move...");
    }
}

class Dog extends Animal{
    //Instance method
    growl(){
        console.log("Dog child class. A dog can growl, but a duct can not quark..");
    }
}

class Duct extends Animal{
    quacl(){
        console.log("Duct child class. A duct can quark, but a dog can not. growl..");
    }
}
//Instance object of Dog class
var goofy = new Dog();
goofy.growl();
goofy.move();

//Instance objetc of Duct class

var donald = new Duct();
donald.quacl();
donald.move();