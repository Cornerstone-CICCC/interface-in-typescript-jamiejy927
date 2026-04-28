// 1. Define Participant as a type alias
type Participant = {
  name: string;
  role: string;
};

// 2. Define Event as an interface
interface Event {
  date: Date;
  title: string;
  participants: Participant[];
}

// 3. Create an object using the Event interface
const event1: Event = {
  date: new Date("2026-04-28"),
  title: "TypeScript Workshop",
  participants: [
    { name: "Jamie", role: "Developer" },
    { name: "Gemini", role: "Assistant" }
  ]
};

console.log("Event Title:", event1.title);
console.log("Total Participants:", event1.participants.length);