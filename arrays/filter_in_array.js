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

const highestScore = users.filter(user => user.score === 100);
const highScore = users.filter(user => user.score >= 75);
const mediumScore = users.filter(user => user.score >= 50);
const lowestScore = users.filter(user => user.score <= 25);

console.log(highestScore);
console.log(highScore);
console.log(mediumScore);
console.log(lowestScore);
