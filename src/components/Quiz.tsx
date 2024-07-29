import { Question } from "./Question";
import { useState } from "react";
import { QUESTIONS } from "../data";
import { LinearProgress, Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type Props = {
  updateFn: (updates?: number[]) => void;
  onFinish: () => void;
  onReset: () => void;
};

export const Quiz: React.FC<Props> = ({ updateFn, onFinish, onReset }) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = (choice: number) => {
    const updates = QUESTIONS[questionNumber].increments[choice];
    updateFn(updates);
    if (questionNumber + 1 >= QUESTIONS.length) {
      onFinish();
    }
    setQuestionNumber(questionNumber + 1);
  };

  const handleReverseClick = () => {
    if (questionNumber > 0) {
      updateFn();
      setQuestionNumber(questionNumber - 1);
    }
  };

  const handleReset = () => {
    setQuestionNumber(0);
    onReset();
  };

  return (
    <>
      <LinearProgress
        id="linear-progress"
        variant="determinate"
        value={(100 * questionNumber) / QUESTIONS.length}
        color={"inherit"}
      />
      {questionNumber > 0 && (
        <Button onClick={handleReset}>
          <RestartAltIcon />
          Restart
        </Button>
      )}
      {questionNumber < QUESTIONS.length && (
        <Question
          question={QUESTIONS[questionNumber].question}
          options={QUESTIONS[questionNumber].options}
          onClick={handleClick}
        />
      )}
      {questionNumber > 0 && questionNumber < QUESTIONS.length && (
        <Button onClick={handleReverseClick}>Back</Button>
      )}
    </>
  );
};
