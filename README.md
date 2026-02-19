# nag-master-3000

![Nag Master 3000](assets/icon.ico)

A passive-aggressive CLI reminder tool that nags you with sarcastic insults until you get your work done.

> "What are you 'supposed' to be doing?" → *Haven't done LAUNDRY yet? Even Internet Explorer would have finished this by now.*

## Overview

A Node.js CLI tool designed to practice Interactive Prompts, Timers, and Desktop Notifications. It uses `inquirer` for user input, `node-notifier` for system-level toast notifications, and `chalk` for colorful terminal output. Comes loaded with 50+ insults across 9 sarcasm categories.

## Installation

```bash
git clone https://github.com/mshandywinata/nag-master-3000.git
cd nag-master-3000
npm install
npm link
```

## Usage

```bash
nag
```

### Prompts

| Prompt | Description |
|---|---|
| Task name | What you're supposed to be doing |
| Duration | Preset timer (`1m`, `5m`, `15m`, `1hr`, `2hr`, `3hr`, `5hr`) or Custom |
| Custom duration | Numeric input in minutes (only shown if Custom is selected) |

### Sample Output

```bash
NAG-MASTER-3000

? What are you 'supposed' to be doing? Laundry
? How long do you need to procrastinate? 5m

[Bot]: Timer started for 5m. I'm watching you.

... (5 minutes later) ...

Haven't done LAUNDRY yet?
Your keyboard is getting dusty. It's embarrassing for both of us.
```

> A desktop notification with sound will also pop up on your system.

## Insult Categories

| Category | Vibe |
|---|---|
| Disappointed Parent | Guilt-tripping with love |
| Overworked Server | Your CPU is judging you |
| Pure Sarcasm | No filter, no mercy |
| Existential Dread | Time is slipping away |
| Fake Encouragement | Supportive... but not really |
| Competitive | You're losing to a snail |
| Short and Sharp | Straight to the point |
| Office Manager | Corporate passive-aggression |
| Tech Support | Have you tried doing the work? |
| Classic Nag | Old-school guilt |

## Built With

- Node.js (ES Modules)
- [inquirer](https://www.npmjs.com/package/inquirer) — Interactive CLI prompts
- [chalk](https://www.npmjs.com/package/chalk) — Terminal string styling
- [node-notifier](https://www.npmjs.com/package/node-notifier) — Desktop notifications
