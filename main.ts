#! /usr/bin/env node 
import inquirer from "inquirer"
const height = await inquirer.prompt({
    name:"user",
    type:"number",
    message:"Kindly Enter your height in meter?",

});

const weight = await inquirer.prompt({
    name:"user",
    type:"number",
    message:"Kindly Enter your weight in Kg"
});
console.log(` Your BMI is ${weight.user / (height.user * height.user)} `)
