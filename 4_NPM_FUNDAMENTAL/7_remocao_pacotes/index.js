import _ from 'lodash';
import chalk from 'chalk';

const a = [1,3,5,8,4];
const b = [5,9,6,8,3];

const diff = _.difference(a, b);

console.log(chalk.white.bgGreen(diff));
