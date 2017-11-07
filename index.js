const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the maximum number: ", (max) => {
    rl.question("3 rule on? ", (rule3) => {
        rl.question("5 rule on? ", (rule5) => {
            rl.question("7 rule on? ", (rule7) => {
                rl.question("11 rule on? ", (rule11) => {
                    rl.question("13 rule on? ", (rule13) => {
                        rl.question("17 rule on? ", (rule17) => {

    for (let i = 1; i <= max; i++) {

        let words = [];

        if (i % 3 === 0 && rule3 === "Y") {
            words.push("Fizz");
        }

        if (i % 13 === 0 && rule13 === "Y") {
            words.push("Fezz");
        }

        if (i % 5 === 0 && rule5 === "Y") {
            words.push("Buzz");
        }

        if (i % 7 === 0 && rule7 === "Y") {
            words.push("Bang");
        }

        if (i % 11 === 0 && rule11 === "Y") {
            words = words.filter(word => word === "Fezz");
            words.push("Bong");
        }

        if (i % 17 === 0 && rule17 === "Y") {
            words.reverse();
        }

        if (words.length > 0) {
            console.log(words.join(""));
        } else {
            console.log(i);
        }
    }
})})})})})})});