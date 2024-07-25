export const Question: React.FC<{
  question: string;
  options: string[];
  onClick: () => void;
}> = ({ question, options, onClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div id="question-options">
        {options.map((option: string) => {
          return <button key={option} onClick={() => onClick()}>{option}</button>;
        })}
      </div>
    </div>
  );
};
