import { Box } from "@mui/material";
import { ProgressBar } from "./ProgressBar";

export const Progress: React.FC<{
  scores: {
    [k: string]: number;
  };
  isFinished: boolean;
}> = ({ scores, isFinished }) => {
  const max = Math.max(...Object.values(scores));
  // TODO: bug fix -- progress bar colors don't reset when quiz resets

  return (
    <Box id="progress">
      {Object.entries(scores).map((p) => {
        return (
          <ProgressBar
            key={p[0]}
            score={p}
            isWinner={isFinished && p[1] === max}
            showDetails={isFinished}
          />
        );
      })}
    </Box>
  );
};
