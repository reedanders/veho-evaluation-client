import adamg from "../assets/images/adamg.png";
import fredc from "../assets/images/fredc.png";
import jamesl from "../assets/images/jamesl.png";
import hamarz from "../assets/images/hamarz.png";
import mylest from "../assets/images/mylest.png";

export const initMessages = [
  {
    id: 1,
    users: [{ user: "Adam G", image: adamg }],
    content: [
      {
        timestamp: 1605291186318,
        user: { user: "Adam G", image: adamg },
        text: "Definitely a wild animal.",
      },
      {
        timestamp: 1605291286318,
        user: { user: "Reed A", image: adamg },
        text: "Pardon?",
      },
    ],
  },
  {
    id: 2,
    users: [{ user: "Fred C", image: fredc }],
    content: [
      {
        timestamp: 1605291386318,
        user: { user: "Fred C", image: fredc },
        text: "Nope. Nah ah.",
      },
    ],
  },
  {
    id: 3,
    users: [
      { user: "James L", image: jamesl },
      { user: "Hamar Z", image: hamarz },
    ],
    content: [
      {
        timestamp: 1605291486318,
        user: { user: "Adam G", image: adamg },
        text: "Yes, and now the motor won’t start.",
      },
    ],
  },
  {
    id: 4,
    users: [{ user: "Hamar Z", image: hamarz }],
    content: [
      {
        timestamp: 1605291586318,
        user: { user: "Hamar Z", image: hamarz },
        text:
          "Have you seen the bologna that has the olives in it? Who's that for?",
      },
    ],
  },
  {
    id: 5,
    users: [{ user: "Myles T", image: mylest }],
    content: [
      {
        timestamp: 1605291686318,
        user: { user: "Myles T", image: mylest },
        text:
          "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      },
    ],
  },
];

export const gibberish = [
  "Yes, and one of them is enormous.",
  "Yes, and he’s swimming toward us.",
  "Yes, and he looks hungry.",
  "Yes, and we are trapped in this boat.",
  "Yes, and he looks more like a whale than a fish.",
  "Yes, and now the motor won’t start.",
  "Yes, and he’s about to eat us.",
  "Yes and I just remembered that this boat is also a plane.",
  "Yes and lucky for you I just got my pilot’s license.",
  "Uh Oh...",
  "Crazy sauce",
  "Nope. Nah ah.",
  "That sounds more like a boat than a panda.",
  "Definitely a wild animal.",
  "I come from a very big family... nine parents.",
  "The only advantage to wearing glasses is that you can do that dramatic removal.",
  "Have you seen the bologna that has the olives in it? Who's that for?",
];
