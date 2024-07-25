import { useState } from "react";
import { Progress, Quiz } from "../components";
import { PETS } from "../data";

const petNames = Object.keys(PETS);

export const QuizPage: React.FC = () => {
  const [scores, setScores] = useState(
    Object.fromEntries(petNames.map((p) => [p, 1]))
  );

  const updateScores = (updates: number[]) => {
    const newScores = Object.fromEntries(
      Object.entries(scores).map((p, i) => [p[0], p[1] + updates[i]])
    );
    setScores(newScores);
  };

  return (
    <>
      <Quiz updateFn={updateScores} />
      <Progress scores={scores} />
    </>
  );
};
