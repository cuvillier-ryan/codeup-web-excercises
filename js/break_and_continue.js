
let oddNumber;

while (true) {
    oddNumber = prompt("Please enter an odd number between 1 and 50.");
    oddNumber = (oddNumber);
    if (oddNumber & 2 !== 0 && oddNumber >= 1 && oddNumber < 50) {
        break;
    }
}
alert("We got out of the loop!")


console.log("Number to skip is: " + oddNumber);
for (let i =1; i < 50; i+= 2) {
    if (i !== oddNumber) {
        console.log("Yikes! Skipping number " + oddNumber);
        contine;
    }
    console.log("Here is an odd number: " + i);
}