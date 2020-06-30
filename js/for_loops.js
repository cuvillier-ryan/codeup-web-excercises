//Exercise 2
let showMultiplicationTable = function(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

showMultiplicationTable(7);


//Exercise 3
for (let i = 0;i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * 181) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    } else {
        console.log(randomNum + " is odd");
    }
}


//Exercise 4
for(let i = 1; i < 10; i++) {
    console.log(String(i).repeat(i))
}

//Exercise 5

for(let i = 100; i > 0; i = i - 5) {
    console.log(i);
}

