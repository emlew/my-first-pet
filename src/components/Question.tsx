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
          return <button key={option} onClick={() => onClick(i)}>{option}</button>;
        })}
      </div>
    </div>
  );
};
