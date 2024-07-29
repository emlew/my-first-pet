import { PETS } from "../data";

export const ProgressBar: React.FC<{
  score: [string, number];
  isWinner: boolean;
  showDetails: boolean;
}> = ({ score, isWinner, showDetails }) => {
  return (
    <div
      id="progress-bar"
      style={{
        height: score[1] > 0 ? score[1] * 10 + "vh" : "10vh",
        background: isWinner ? "#3E8AD6" : "default",
      }}
    >
      <h3>{showDetails && score[0]}</h3>
      <p>{showDetails && isWinner && PETS[score[0]].info}</p>
    </div>
  );
};
