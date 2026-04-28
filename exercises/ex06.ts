// 1. Define a union type
type StringOrNumber = string | number;

// 2. Function with Type Guard
function printInfo(arg: StringOrNumber): void {
  if (typeof arg === "string") {
    // TypeScript knows 'arg' is a string here
    console.log("String value: " + arg.toUpperCase());
  } else {
    // TypeScript knows 'arg' is a number here
    console.log("Number value: " + arg.toFixed(2));
  }
}

// 3. Call the function with both types
printInfo("hello typescript"); // Output: String value: HELLO TYPESCRIPT
printInfo(100.456);            // Output: Number value: 100.46