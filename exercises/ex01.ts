// 1. Define the Triangle interface
interface Triangle {
  sideA: number;
  sideB: number;
  sideC: number;
  calculatePerimeter(): number;
  calculateArea(): number;
  isTriangle(): boolean;
}

// 2. Create an object using the Triangle interface
const myTriangle: Triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,

  // Calculate perimeter: sum of all sides
  calculatePerimeter() {
    return this.sideA + this.sideB + this.sideC;
  },

  // Calculate area: using Heron's formula
  calculateArea() {
    const s = this.calculatePerimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  },

  // Check if it is a valid triangle
  isTriangle() {
    const { sideA, sideB, sideC } = this;
    return (
      sideA + sideB > sideC &&
      sideA + sideC > sideB &&
      sideB + sideC > sideA
    );
  }
};

// 3. Test the methods
console.log(myTriangle.calculatePerimeter()); // 12
console.log(myTriangle.calculateArea());      // 6
console.log(myTriangle.isTriangle());         // true