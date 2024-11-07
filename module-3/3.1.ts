{
    // oop - class

    class Animal {
        public name: string;
        public species: string;
        public sound: string;

        constructor(name: string, species: string, sound: string) {

        this.name = name;
        this.species = species;
        this.sound = sound
        };

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
        
    }

    const dog = new Animal ("German Sheparad", "Dog", "Ghew Ghew")
    const cat = new Animal ("Adhu Biral", "Cat", "Meaw Meaw")
    cat.makeSound();


    // 
}