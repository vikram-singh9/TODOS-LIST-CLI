#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            message: chalk.bgBlueBright("ENTER YOUR TODOS..."),
            name: "todo",
            type: "input",
        },
        {
            message: chalk.bgRedBright("DO YOU WANT TO ADDMORE IN YOUR TODOS ?"),
            name: "addmore",
            type: "confirm",
            default: "false",
        },
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
