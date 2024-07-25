import { useState } from "react";
import { Progress, Quiz } from "../components";
import { PETS } from "../data";

const petNames = Object.keys(PETS);

export const QuizPage: React.FC = () => {
  const [scores, setScores] = useState(
    Object.fromEntries(petNames.map((p) => [p, 1]))
  );

  const updateScores = () => {
    const updates = [1, 0, 1, 0, 1, 0, 1, 0];
    const newScores = Object.fromEntries(
      Object.entries(scores).map((p, i) => [p[0], p[1] + updates[i]])
    );
    setScores(newScores);
    console.log("updated!");
  };

  return (
    <>
      <Quiz updateFn={updateScores} />
      <Progress scores={scores} />
    </>
  );
};
