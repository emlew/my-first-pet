import { useState } from "react";
import { Progress, Quiz } from "../components";
import { PETS } from "../data";

const petNames = Object.keys(PETS);

export const QuizPage: React.FC = () => {
  const [scores, setScores] = useState(
    Object.fromEntries(petNames.map((p) => [p, 1]))
  );
  const [isFinished, setIsFinished] = useState(false);

  const updateScores = (updates: number[]) => {
    const newScores = Object.fromEntries(
      Object.entries(scores).map((p, i) => [p[0], p[1] + updates[i]])
    );
    setScores(newScores);
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  return (
    <>
      <Quiz updateFn={updateScores} onFinish={handleFinish} />
      <Progress scores={scores} isFinished={isFinished} />
    </>
  );
};
