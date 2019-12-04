const persons = [
    {
        id: 1,
        name: "Thomas Shelby",
        organization: "Shelby Company Ltd."
    },
    {
        id: 2,
        name: "Polly Gray",
        organization: "Shelby Company Ltd."
    },
    {
        id: 3,
        name: "Ada Shelby",
        organization: "Shelby Company Ltd."
    },
    {
        id: 4,
        name: "Chester Campbell",
        organization: "Ulster Volunteer Force"
    }
];


const person = persons.find(item => item.organization === "Shelby Company Ltd.");
const notHere = persons.find(item => item.organization === "England Union of Fascists");
console.log(person);
console.log(notHere);
