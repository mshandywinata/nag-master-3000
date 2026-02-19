import path from 'path';
import { fileURLToPath } from 'url';
import notifier from 'node-notifier';
import chalk from 'chalk';
import { getRandomInsult } from './insult.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconPath = path.join(__dirname, '..', 'assets', 'icon.ico');

export function parseToMs(str) {
    if (str.endsWith('m')) {
        return parseInt(str) * 60000;
    } else if (str.endsWith('hr')) {
        return parseInt(str) * 3600000;
    } else {
        return parseInt(str) * 60000;
    }
}

export function formatDelay(ms) {
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0 && remainingMinutes > 0) return `${hours}hr ${remainingMinutes}m`;
    if (hours > 0) return `${hours}hr`;
    return `${minutes}m`;
}

export function startNag(task, time) {
    const delay = parseToMs(time);
    const formatted = formatDelay(delay);

    console.log(chalk.cyan(`\n[Bot]: Timer started for ${formatted}. I'm watching you.\n`));

    setTimeout(() => {
        const insult = getRandomInsult();

        notifier.notify({
            appID: 'NAG-MASTER-3000',
            icon: iconPath,
            title: `Have you done ${task} yet?`,
            message: insult,
            sound: true,
            wait: true,
        });

        console.log(chalk.red.bold(`\nHaven't done ${task.toUpperCase()} yet?`));
        console.log(chalk.yellow(insult));
    }, delay);
}