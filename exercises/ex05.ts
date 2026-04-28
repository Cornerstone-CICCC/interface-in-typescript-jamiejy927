// 1. Define Admin and Employee types
type Admin = {
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// 2. Create an intersection type
type AdminEmployee = Admin & Employee;

// 3. Instantiate an object using AdminEmployee
const staffMember: AdminEmployee = {
  name: "Jamie",
  startDate: new Date(),
  privileges: ["create-server", "manage-users"]
};

// 4. Display the properties
console.log("Name:", staffMember.name);
console.log("Privileges:", staffMember.privileges.join(", "));