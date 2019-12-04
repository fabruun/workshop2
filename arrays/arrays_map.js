const users = [
    {
        name: "Thomas",
        score: 100
    },
    {
        name: "Polly",
        score: 50
    },
    {
        name: "Ada",
        score: 10
    }
];

const scores = users.map(user => user.score);
const names = users.map(user => user.name);
console.log(scores);
console.log(names);
