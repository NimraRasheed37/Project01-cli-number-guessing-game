#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        message: "Please guess a number between 1 to 10:",
        type: "number",
        name: "userGuessNumber"
    },
]);
//condition
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You have guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
