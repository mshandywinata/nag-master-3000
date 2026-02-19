const disappointedParent = [
  "I’m not mad, I’m just... surprised you haven't started yet.",
  "I guess the task is just going to do itself then? Magical.",
  "I remember when you had ambitions. That was a nice five minutes.",
  "Your potential is infinite. Your productivity, however, is not.",
  "I'll just sit here in the dark until you're ready to be an adult."
];

const overworkedServer = [
  "Oh, you're still here? I thought you'd be halfway done by now.",
  "Processing... unlike your brain, apparently.",
  "My cooling fans are working harder than you are right now.",
  "I have 16 cores and I'm using zero of them because you're stalling.",
  "Error 404: Motivation not found. Try turning yourself off and on again."
];

const pureSarcasm = [
  "Wow, another world record for procrastination. Congrats.",
  "Is the 'Do Nothing' part of the task going well?",
  "I love how you prioritize staring into space over your responsibilities.",
  "Should I call the Guinness Book of World Records for this delay?",
  "You're doing great! If the goal was to achieve absolutely nothing."
];

const existentialDread = [
  "The heat death of the universe will happen before you finish this.",
  "Time is a finite resource. And you’re just throwing it at me.",
  "Every second you wait is a second you'll never get back. Tick tock.",
  "Are you waiting for a sign from the heavens? Because this is it.",
  "Eventually, we all become dust. But usually, we finish our chores first."
];

const fakeEncouragement = [
  "Go on, take another five minutes. The task isn't going anywhere. Unfortunately.",
  "You're so good at resting! Truly a professional.",
  "Don't push yourself. We wouldn't want you to actually finish something.",
  "Take your time. It’s not like there’s a deadline or anything. Oh wait.",
  "I believe in you! I mean, someone has to, right?"
];

const competitive = [
  "A snail moved three inches while you sat there. It's winning.",
  "My internal clock is literally lapping you right now.",
  "I could have mined three Bitcoins in the time you've wasted.",
  "Even Internet Explorer would have finished this by now.",
  "Your keyboard is getting dusty. It’s embarrassing for both of us."
];

const shortAndSharp = [
  "Move it.",
  "Still waiting...",
  "Any day now.",
  "The task. Do it.",
  "Tik. Tok."
];

const officeManager = [
  "Per my last notification, you are significantly behind schedule.",
  "Let's circle back to the part where you actually do the work.",
  "I'm putting this on your permanent record.",
  "We need to 'synergize' your effort with reality.",
  "I’m going to need those TPS reports... and by that, I mean your task."
];

const techSupport = [
  "Have you tried actually doing the work? It usually fixes the issue.",
  "Input recognized. Effort not found. Please try again.",
  "Connection to 'Productivity' timed out. Retrying...",
  "Your 'Ambition' driver seems to be corrupted.",
  "Warning: High levels of laziness detected in Sector 7G."
];

const classicNag = [
  "I shouldn't have to tell you twice.",
  "How many times do we have to go over this?",
  "If I had a nickel for every minute you wasted, I'd be a supercomputer.",
  "You'll thank me when it's done. Until then, get moving.",
  "Is this how you treat all your reminders? No wonder they quit."
];

const allInsults = [
  ...disappointedParent, 
  ...pureSarcasm, 
  ...shortAndSharp,
  ...overworkedServer,
  ...existentialDread,
  ...fakeEncouragement,
  ...competitive,
  ...officeManager,
  ...techSupport,
  ...classicNag,
];

export function getRandomInsult() {
  return allInsults[Math.floor(Math.random() * allInsults.length)];
}