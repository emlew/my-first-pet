import { Question } from "./Question";
import { useState } from "react";
import { QUESTIONS } from "../data";
import { LinearProgress } from "@mui/material";

type Props = {
  updateFn: (updates: number[]) => void;
  onFinish: () => void;
};

export const Quiz: React.FC<Props> = ({ updateFn, onFinish }) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = (choice: number) => {
    const updates = QUESTIONS[questionNumber].increments[choice];
    updateFn(updates);
    if (questionNumber + 1 >= QUESTIONS.length) {
      onFinish();
    }
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      <LinearProgress
        id="linear-progress"
        variant="determinate"
        value={(100 * questionNumber) / QUESTIONS.length}
        color={"inherit"}
      />
      {questionNumber < QUESTIONS.length && (
        <Question
          question={QUESTIONS[questionNumber].question}
          options={QUESTIONS[questionNumber].options}
          onClick={handleClick}
        />
      )}
    </>
  );
};
