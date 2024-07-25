import { Question } from "./Question";
import { useState } from "react";
import { QUESTIONS } from "../data";

export const Quiz: React.FC<{ updateFn: (updates: number[]) => void }> = ({ updateFn }) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = (choice: number) => {
    const updates = QUESTIONS[questionNumber].increments[choice];
    setQuestionNumber(questionNumber + 1);
    updateFn(updates);
    if (questionNumber >= QUESTIONS.length) {
      // finish the quiz
    }
  }

  return (
    <Question
      question={QUESTIONS[questionNumber].question}
      options={QUESTIONS[questionNumber].options}
      onClick={handleClick}
    />
  );
};
