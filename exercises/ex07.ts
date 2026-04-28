// 1. Create interfaces with a discriminated property 'breed'
interface Bird {
  breed: "bird"; // Discriminated property
  flyingSpeed: number;
}

interface Horse {
  breed: "horse"; // Discriminated property
  runningSpeed: number;
}

// 2. Union type
type Animal = Bird | Horse;

// 3. Function using discriminated unions to print movement
function moveAnimal(animal: Animal): void {
  switch (animal.breed) {
    case "bird":
      // TypeScript knows this is a Bird
      console.log(`The bird flies at ${animal.flyingSpeed} km/h.`);
      break;
    case "horse":
      // TypeScript knows this is a Horse
      console.log(`The horse gallops at ${animal.runningSpeed} km/h.`);
      break;
  }
}

// 4. Test the function
moveAnimal({ breed: "bird", flyingSpeed: 50 });
moveAnimal({ breed: "horse", runningSpeed: 80 });