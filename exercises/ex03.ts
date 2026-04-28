// 1. Base interface for all shapes
interface Shape {
  calculatePerimeter(): number;
  calculateArea(): number;
}

// 2. Specialized interfaces extending Shape
interface Rectangle extends Shape {
  width: number;
  height: number;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  side: number;
}

// 3. Implementing a Rectangle object
const myRectangle: Rectangle = {
  width: 10,
  height: 5,
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  },
  calculateArea() {
    return this.width * this.height;
  }
};

// 4. Implementing a Circle object
const myCircle: Circle = {
  radius: 10,
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  },
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
};

// Test the outputs
console.log("Rectangle Area:", myRectangle.calculateArea()); // 50
console.log("Circle Perimeter:", myCircle.calculatePerimeter().toFixed(2)); // 62.83