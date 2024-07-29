export type Pet =
  | "Cat"
  | "Dog"
  | "Bird"
  | "Rabbit"
  | "Guinea Pig"
  | "Fish"
  | "Reptile"
  | "Ferret";

type PetInfo = {
  name: Pet;
  info: string;
};

export const PETS: Record<string, PetInfo> = {
  Cat: {
    name: "Cat",
    info: "Independent and curious, cats are affectionate yet enjoy their alone time. They are low-maintenance, making them ideal for busy owners.",
  },
  Dog: {
    name: "Dog",
    info: "Loyal and social, dogs are energetic companions that thrive on attention and regular exercise. They vary greatly in size, temperament, and activity level.",
  },
  Bird: {
    name: "Bird",
    info: "Birds are vibrant and intelligent pets, often enjoying interaction with their owners. They require mental stimulation and space to fly.",
  },
  Rabbit: {
    name: "Rabbit",
    info: "Gentle and quiet, rabbits are social animals that enjoy companionship. They need ample space to hop and a diet rich in hay and vegetables.",
  },
  "Guinea Pig": {
    name: "Guinea Pig",
    info: "Friendly and vocal, guinea pigs are social creatures that thrive in pairs or groups. They require a diet high in vitamin C and a spacious cage.",
  },
  Fish: {
    name: "Fish",
    info: "Peaceful and colorful, fish can add tranquility to any space. They require an appropriately sized aquarium with proper filtration and regular maintenance.",
  },
  Reptile: {
    name: "Reptile",
    info: "Reptiles, like snakes and lizards, are low-maintenance pets that require specific habitats and temperature control. They can be fascinating to observe.",
  },
  Ferret: {
    name: "Ferret",
    info: "Playful and curious, ferrets are energetic pets that love to explore and interact with their owners. They need a secure environment and regular playtime.",
  },
};

export const QUESTIONS = [
  {
    question: "How old are you?",
    options: [
      "Under 12",
      "12-17",
      "18-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65-74",
      "75 or older",
    ],
    increments: [
      [-1, -1, 1, 1, 1, 1, 1, 1],
      [1, -1, 1, -1, -1, 1, 1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1],
      [1, 1, 1, 1, -1, 1, 1, -1],
      [1, 1, 1, 1, -1, 1, 1, -1],
      [1, 1, 1, -1, -1, 1, 1, -1],
      [1, 1, 1, -1, -1, 1, 1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1],
    ],
  },
  {
    question: "Where do you live?",
    options: ["Urban", "Suburban", "Rural"],
    increments: [
      [1, -1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, 1, -1, -1],
    ],
  },
  {
    question: "How often do you travel?",
    options: ["Most weekends", "Once a month", "A few times a year", "Rarely"],
    increments: [
      [-1, -1, 1, -1, -1, 1, 1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  {
    question: "How much space do you have for this pet?",
    options: [
      "A small countertop",
      "Part of a room",
      "They can access the whole house!",
      "They can access the whole house, and the yard too!",
    ],
    increments: [
      [-1, -1, -1, -1, -1, 1, 1, -1],
      [-1, -1, 1, -1, -1, 1, 1, -1],
      [1, -1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  {
    question: "How much time do you have for this pet?",
    options: ["An hour a week", "A few hours a week", "An hour a day"],
    increments: [
      [-1, -1, -1, -1, -1, 1, 1, -1],
      [1, -1, 1, -1, -1, 1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
];

/* TODO: add the rest of these questions
- [ ]  Is anyone in your household allergic?
- [ ]  What pets are you allowed to have?
- [ ]  How old are you?
- [ ]  Where do you live? (urban, suburban, rural)
- [ ]  How often do you travel?
- [ ]  How much space do you have?
- [ ]  How much do you want to spend?
- [ ]  How much time do you have?
- [ ]  How long do you want to have a pet?
- [ ]  Do you have other pets?
*/
