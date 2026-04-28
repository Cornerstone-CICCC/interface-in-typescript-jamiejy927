// 1. Define the Animal interface
interface Animal {
  breed: string;
  name: string;
}

// 2. Define the SoundMaker interface
interface SoundMaker {
  makeSound(): void;
}

// 3. Create the Pet class implementing both Animal and SoundMaker
class Pet implements Animal, SoundMaker {
  breed: string;
  name: string;

  constructor(breed: string, name: string) {
    this.breed = breed;
    this.name = name;
  }

  // Implementation of the makeSound method
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

// 4. Test the Pet class
const myPet = new Pet("Labrador", "Buddy");
myPet.makeSound(); // Expected output: Buddy says: Woof!