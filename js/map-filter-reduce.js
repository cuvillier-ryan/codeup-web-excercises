const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const filtered = users.filter((user) => user.languages.length >= 3);
console.log(filtered);

let userEmails = users.map(user => user.email);


let totalExp = users.reduce((a, user) => a + user.yearsOfExperience, 0);
console.log(totalExp);

let averageExp = totalExp / users.length;
console.log(totalExp, averageExp);

let longestEmail = users.reduce((longest,user) => {}, "")


let listOfInstructors = users.reduce((instructors,user,index) => {
    if (index === arr.length -1) {
        return `${instructors}${user.name}.`;
    }else {
        return `${instructors}${user.name},`
    }
}, "Your instructors are: ");

console.log(listOfInstructors);
