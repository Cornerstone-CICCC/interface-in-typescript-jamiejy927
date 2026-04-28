// Accessing the HTML input element using type casting
const userInputElement = document.getElementById("user-input") as HTMLInputElement;

// Accessing and modifying the value of the input
if (userInputElement) {
  userInputElement.value = "Hello, TypeScript!";
  console.log("Value modified successfully.");
}