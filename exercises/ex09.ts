// Interface for dynamic error messages
interface ErrorContainer {
  [prop: string]: string; // Index property: any string key will have a string value
}

// Object that can hold multiple error fields
const errorBag: ErrorContainer = {
  email: "Invalid email format",
  username: "Username is already taken",
  password: "Password is too short"
};

// Display the stored errors
console.log(errorBag.email);
console.log(errorBag.username);
console.log(errorBag.password);