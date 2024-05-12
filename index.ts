#! /usr/bin/env node

import inquirer from "inquirer"

const result = await inquirer.prompt([
  { message: "Enter your first number:", type: "number", name: "firstNumber" },
  { message: "Enter your second number:", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation:",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);


if (result.operators === "Addition"){
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operators === "Subtraction"){
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operators === "Multiplication"){
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operators === "Division"){
    console.log(result.firstNumber / result.secondNumber);
}
else{
    console.log("Please select valid operator");
}
