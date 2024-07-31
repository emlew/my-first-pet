import { Box, Typography } from "@mui/material";
import { PETS } from "../data";

export const ProgressBar: React.FC<{
  score: [string, number];
  isWinner: boolean;
  showDetails: boolean;
}> = ({ score, isWinner, showDetails }) => {
  // TODO: add color contrast to make details more readable
  // TODO: add mobile functionality
  return (
    <Box
      id="progress-bar"
      style={{
        height: score[1] > 0 ? score[1] * 10 + "vh" : "10vh",
        background: isWinner ? "#3E8AD6" : "default",
      }}
    >
      <Typography variant="h5">{showDetails && score[0]}</Typography>
      <Typography>{showDetails && isWinner && PETS[score[0]].info}</Typography>
    </Box>
  );
};
