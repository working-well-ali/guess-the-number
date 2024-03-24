import inquirer from "inquirer";
import chalk from "chalk";
const number = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "random",
        type: number,
        message: "please guess the number between 1-5"
    }
]);
//conditions
if (answer.random == number) {
    console.log(chalk.bgGreen("you guess a correct  number"));
}
else {
    console.log(chalk.bgRed("sorry! you guess wrong number"));
}
//condition
if (answer.random > 5) {
    console.log(chalk.bgBlue("pls write the number less then 5"));
}
