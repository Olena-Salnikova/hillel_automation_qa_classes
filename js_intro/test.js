import color from 'chalk';
import { passed, failed, flaky } from './constants.js';


console.log('Hello world!');
console.log(color.blue('Test run has finished'));
console.log(color.green('Passed: ', passed));
console.log(color.red('Failed: ', failed));
console.log(color.yellow('Flaky: ', flaky));

import testsList from './testTitles.js';
console.log(testsList.test1);
console.log(testsList.test2);

import * as constants from './constants.js';
console.log(color.blue('Test run has finished'));
console.log(color.green('Passed: ', passed));
console.log(color.red('Failed: ', failed));
console.log(color.yellow('Flaky: ', flaky));