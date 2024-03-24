#! /usr/bin/env node

import inquirer from "inquirer"
let randomGenerate : number = Math.ceil(Math.random()*10)
//console.log(randomGenerate)
let user = await inquirer.prompt([{
    name : 'userNumber',
    type : 'number',
    message:'Pease Enter Your Number Ranging 1-10 : '

},]);
if (user.userNumber === randomGenerate) {
    console.log(`Congratulation! You Won ${user.userNumber} = `, randomGenerate);
} else {
    console.log('Sorry! You Choose Wrong Number')
}