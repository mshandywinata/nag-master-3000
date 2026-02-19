#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import { questions } from './src/prompt.js';
import { startNag } from './src/timer.js';

async function main() {
  console.clear();
  console.log(chalk.cyan.bold("NAG-MASTER-3000"));

  try {
    const answers = await inquirer.prompt(questions);
    
    // decide which time input to use
    const finalTime = answers.duration === 'Custom' 
      ? answers.customDuration 
      : answers.duration;

    startNag(answers.task, finalTime);
    
  } catch (error) {
    console.error(chalk.red('Something went wrong. Even the bot failed you.'), error);
  }
}

main();