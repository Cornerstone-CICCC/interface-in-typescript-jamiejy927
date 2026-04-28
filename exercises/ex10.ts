// 1. Define nested data structure with 'any' type to simulate dynamic data
const fetchedUserData: any = {
  id: "u1",
  name: "Jamie",
};

// 2. Use Optional Chaining to access nested properties safely
console.log(fetchedUserData?.job?.title);

// 3. Example with a property that actually exists
console.log(fetchedUserData?.name);