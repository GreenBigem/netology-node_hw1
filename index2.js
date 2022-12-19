import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const appNum = Math.floor(Math.random() * 100)

let answer = await rl.question('Загадано число в диапазоне от 0 до 100. Угадай его! ');
let end = false

do {
    if (answer < appNum) {
        console.log("Загаданное число больше, чем " + answer);
        answer = await rl.question('Попробуй еще раз!');
    } else if (answer > appNum) {
        console.log("Загаданное число меньше, чем " + answer);
        answer = await rl.question('Попробуй еще раз!');
    } else {
        console.log("Ты угадал. Мы загадали число: " + appNum);
        end = true
    }
} while (end === false)

    
rl.close();