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
    info: "Cat",
  },
  Dog: {
    name: "Dog",
    info: "Dog",
  },
  Bird: {
    name: "Bird",
    info: "Bird",
  },
  Rabbit: {
    name: "Rabbit",
    info: "Rabbit",
  },
  "Guinea Pig": {
    name: "Guinea Pig",
    info: "Guinea Pig",
  },
  Fish: {
    name: "Fish",
    info: "Fish",
  },
  Reptile: {
    name: "Reptile",
    info: "Reptile",
  },
  Ferret: {
    name: "Ferret",
    info: "Ferret",
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
