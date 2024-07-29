import { useState } from "react";
import { Progress, Quiz } from "../components";
import { PETS } from "../data";

const petNames = Object.keys(PETS);

export const QuizPage: React.FC = () => {
  const [scores, setScores] = useState(
    Object.fromEntries(petNames.map((p) => [p, 1]))
  );
  const [isFinished, setIsFinished] = useState(false);
  const [choices, setChoices] = useState<number[][]>([]);

  const updateScores = (updates?: number[]) => {
    if (!updates) {
      const newScores = Object.fromEntries(
        Object.entries(scores).map((p, i) => [p[0], p[1] - choices[0][i]])
      );
      setScores(newScores);
      setChoices((prev) => {
        const updatedChoices = prev.slice(1);
        return updatedChoices;
      });
    } else {
      const newScores = Object.fromEntries(
        Object.entries(scores).map((p, i) => [p[0], p[1] + updates[i]])
      );
      setScores(newScores);
      setChoices((prev) => {
        const updatedChoices = [updates, ...prev];
        return updatedChoices;
      });
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  const handleReset = () => {
    const newScores = Object.fromEntries(petNames.map((p) => [p, 1]));
    setScores(newScores);
    setIsFinished(false);
    setChoices([]);
  };

  return (
    <>
      <Quiz
        updateFn={updateScores}
        onFinish={handleFinish}
        onReset={handleReset}
      />
      <Progress scores={scores} isFinished={isFinished} />
    </>
  );
};
