import { Box, Button, Typography } from "@mui/material";

export const Question: React.FC<{
  question: string;
  options: string[];
  onClick: (choice: number) => void;
}> = ({ question, options, onClick }) => {
  return (
    <>
      <Typography variant="h2">{question}</Typography>
      <Box id="question-options">
        {options.map((option: string, i) => {
          return (
            <Button
              variant={"contained"}
              key={option}
              onClick={() => onClick(i)}
            >
              {option}
            </Button>
          );
        })}
      </Box>
    </>
  );
};
