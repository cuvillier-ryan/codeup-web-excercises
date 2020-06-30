let num = 2;

while (num <= 65536) {
    console.log(num);
    num *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {
    //sell cones
    let cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {
        allCones = allCones - cones;
        console.log(cones = " cones sold...")
    }else {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
    }

} while (allCones > 0);




