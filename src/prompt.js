export const questions = [
    {
        type: 'input',
        name: 'task',
        message: "What are you 'supposed' to be doing?",
        validate: (input) => {
            return input.length >= 3 ? true : 'Task name must be at least 3 characters long.';
        },
    },
    {
        type: 'list',
        name: 'duration',
        message: 'How long do you need to procrastinate?',
        choices: ['1m', '5m', '15m', '1hr', '2hr', '3hr', '5hr', 'Custom'],
    },
    {
        type: 'input',
        name: 'customDuration',
        message: 'Fine. How many minutes exactly? (numeric only)',
        when: (answers) => answers.duration === 'Custom',
        validate: (input) => {
            const isNumber = !isNaN(parseFloat(input)) && isFinite(input);
            if (isNumber && Number(input) > 0) {
                return true;
            }
            return 'Give me a real number, don\'t make it harder for me.';
        },
        filter: (input) => `${input}m`,
    }
]