type Pet = "Cat" | "Dog" | "Bird" | "Rabbit" | "Guinea Pig" | "Fish" | "Reptile" | "Ferret";

type PetInfo = {
    name: Pet,
    info: string
}


export const PETS: Record<string, PetInfo> = {
    'Cat' : {
        name: 'Cat',
        info: 'Cat'
    },
    'Dog' : {
        name: 'Dog',
        info: 'Dog'
    },
    'Bird' : {
        name: 'Bird',
        info: 'Bird'
    },
    'Rabbit' : {
        name: 'Rabbit',
        info: 'Rabbit'
    },    
    'Guinea Pig' : {
        name: 'Guinea Pig',
        info: 'Guinea Pig'
    },
    'Fish' : {
        name: 'Fish',
        info: 'Fish'
    },
    'Reptile' : {
        name: 'Reptile',
        info: 'Reptile'
    },
    'Ferret' : {
        name: 'Ferret',
        info: 'Ferret'
    }
}

export const QUESTIONS = [
    {
        question: 'How old are you?',
        options: ['Under 12 years old',
            '12-17 years old',
            '18-24 years old',
            '25-34 years old',
            '35-44 years old',
            '45-54 years old',
            '55-64 years old',
            '65-74 years old',
            '75 years or older']
    },
    {
        question: 'Where do you live?',
        options: ['Urban','Suburban','Rural']
    },
    {
        question: 'How often do you travel?',
        options: ['Most weekends', 'Once a month','A few times a year','Rarely']
    },
    {
        question: 'How much space do you have for this pet?',
        options: ['A small countertop', 'Part of a room', 'They can access the whole house!','They can access the whole house, and the yard too!']
    },
    {
        question: 'How much time do you have for this pet?',
        options: ['An hour a week','A few hours a week','An hour a day']
    }
]

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