import { Question } from "./Question";
import { useState } from "react";
import { QUESTIONS } from '../data';

export const Quiz: React.FC = () => {
    const [questionNumber, setQuestionNumber] = useState(0)

    function handleClick() {
        setQuestionNumber(questionNumber+1)
        if (questionNumber >= QUESTIONS.length) {
            // finish the quiz
        }
    }

    return (
        <Question question={QUESTIONS[questionNumber].question} options={QUESTIONS[questionNumber].options} onClick={handleClick} />
    )
}