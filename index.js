/*for (var i = 1; i <= 256; i++){

    // Create string based on multiple rules
    var str = "";
    // Fizz comes first
    if (i % 3 === 0) {
        str+="Fizz-";
    }
    // Fezz comes before the Bs
    if (i % 13 === 0) {
        str += "Fezz-";
    }
    // Buzz for multiples of 5
    if (i % 5 === 0) {
        str+="Buzz-";
    }
    // Bang for multiples of 7
    if (i % 7 === 0) {
        str+="Bang-";
    }
    // Multiple of 11 overwrites all except Fezz
    if (i % 11 === 0) {
        str = "Bong-";
        // Re-add Fezz to multiples of 13
        if (i % 13 === 0) {
            str = "Fezz-" + str;
        }
    }
    // Reverse order of words if multiple of 17
    if (i % 17 === 0) {
        str = str.split("-").reverse().join("-");
    }
    // Remove dashes
    str = str.replace(/-/g,"");

    if (str === "") {
        str = i;
    }
    console.log(str);
}*/

for (let i = 1; i <= 255; i++) {

    let words = [];

    if (i % 3 === 0) {
        words.push("Fizz");
    }

    if (i % 13 === 0) {
        words.push("Fezz");
    }

    if (i % 5 === 0) {
        words.push("Buzz");
    }

    if (i % 7 === 0) {
        words.push("Bang");
    }

    if (i % 11 === 0) {
        words = words.filter(word => word === "Fezz");
        words.push("Bong");
    }

    if (i % 17 === 0) {
        words.reverse();
    }

    if (words.length > 0) {
        console.log(words.join(""));
    } else {
        console.log(i);
    }
}