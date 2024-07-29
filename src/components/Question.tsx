import { Button } from "@mui/material";

export const Question: React.FC<{
  question: string;
  options: string[];
  onClick: (choice: number) => void;
}> = ({ question, options, onClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div id="question-options">
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
      </div>
    </div>
  );
};
